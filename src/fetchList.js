import fetch from 'isomorphic-fetch'

const fetchList = (consumerKey, accessToken, tag) => {
	const url = 'https://getpocket.com/v3/get'
	
	return fetch(
		url,
		{
			method: 'POST',
			body: JSON.stringify({
				consumer_key: consumerKey,
				access_token: accessToken,
				count: 12,
				sort: 'newest',
				state: 'all',
				detailType: 'complete',
				tag
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-Accept': 'application/json'
			}
		}
	)
		.then(data => {
			if (data.status !== 200) {
				return Promise.reject(error)
			}

			return data.json()
		})
		.then(json =>
			Object.keys(json.list)
				.map(key => {
					const { top_image_url, has_image, resolved_url, resolved_title, time_updated } = json.list[key]
					return {
						imageUrl: top_image_url,
						hasImage: has_image === '1',
						sourceUrl: resolved_url,
						title: resolved_title,
						time: time_updated
					}
				})
				.sort((a, b) => a.time < b.time)
		)
}

export default fetchList