import serializeError from 'serialize-error'
import fetchAuthStepDescription from './authorizePocketApp'
import fetchAccessToken from './fetchAccessToken'
import fetchList from './fetchList'

require('dotenv').config()

if (process.env.TERMINAL === 'true') {
  const ArgumentParser = require('argparse').ArgumentParser
  
  const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Pocket listing API'
  })
  
  const subparsers = parser.addSubparsers({
    dest:"subcommand_name"
  })
  
  subparsers.addParser('auth', {
    addHelp: true,
    description: `Pocket App authorization helper. App authorization is required to access links in a user's Pocket account. It cannot be achieved \
    directly, since Pocket uses OAuth 2. The auth step asks Pocket to provide a request token ("code"), is used to show an OAuth page for the app.`
  })
  
  const tokenParser = subparsers.addParser('token', {
    addHelp: true,
    description: `Pocket App authorization helper. App authorization is required to access links in a user's Pocket account. It cannot be achieved \
    directly, since Pocket uses OAuth 2. The token step creates a token for use in retrieving Pocket links, after the user authorized the app. \
    It uses the token received from the auth step`
  })
  
  tokenParser.addArgument('code', { help: 'Code received from the auth step' })
  
  const args = parser.parseArgs()
  
  const consumerKey = process.env.CONSUMER_KEY
  if (args.subcommand_name === 'auth') {
    fetchAuthStepDescription(consumerKey)
  } else if (args.subcommand_name === 'token') {
    fetchAccessToken(consumerKey, args.code)
  }
}

export default (_, response) => {
  const consumerKey = process.env.CONSUMER_KEY
  const accessToken = process.env.ACCESS_TOKEN
  const pocketTag = process.env.POCKET_TAG
  const screenshotServiceUrl = process.env.SCREENSHOT_SERVICE_URL

  fetchList(consumerKey, accessToken, pocketTag, screenshotServiceUrl)
    .then((pocketResponse) => {
      response.json(pocketResponse)
    })
    .catch((error) => {
      response.statusCode = 500
      response.json({
        error: serializeError(error)
      })
    })
}