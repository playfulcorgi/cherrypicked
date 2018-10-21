import fetch from 'isomorphic-fetch'

require('dotenv').config()

const fetchAuthStepDescription = (consumerKey) => {
	fetch(
		'https://getpocket.com/v3/oauth/request',
		{
			method: 'POST',
			body: JSON.stringify({
				consumer_key: consumerKey,
				redirect_uri: 'redirect.com'
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Accept': 'application/json'
			}
		})
		.then(
			data => {
				if (data.status !== 200) {
					console.log(data)
				} else {
					return data.json()
				}
			}	,
			error => {
				console.log(error)
				throw error
			}
		)
		.then(response => {
			console.log(`Go to: https://getpocket.com/auth/authorize?request_token=${response.code}&redirect_uri=https://someurlthatdoesnotexist1234.com/authorizationFinished`)
		})
		.catch(console.error)
}

export default fetchAuthStepDescription
