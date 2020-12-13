const getGQL = (url, headers={}) =>
    (query="", variables={}) =>
        fetch(url,
            {method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...headers
                },
                body: JSON.stringify({query,variables})
            })
            .then(res => res.json())

export default getGQL