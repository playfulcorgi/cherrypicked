import fetch from 'isomorphic-fetch'
const getAccessTokenUrl = 'https://getpocket.com/v3/oauth/authorize'


const fetchAccessToken = (consumerKey, code) => {
	fetch(
		getAccessTokenUrl,
		{
			method: 'POST',
			body: JSON.stringify({
				consumer_key: consumerKey,
				code: code
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Accept': 'application/json'
			}
		}
	)
	.then(data => {
		if (data.status !== 200) {
			console.error(data)
		} else {
			return data.json()
		}
	})
	.then(response => {
		console.log(response, 'Save access token inside .env under ACCESS_TOKEN')
	})
	.catch(console.error)
}

export default fetchAccessToken
