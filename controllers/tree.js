const axios = require('axios');

const tree = async(req, res)=>{
	const body = req.body;
	await axios(
		{
			url: 'https://netzwelt-devtest.azurewebsites.net/Territories/All',
			method: 'GET',
			data: body
		}
	).then(
		success => res.json(success.data)
	).catch(
		fail => res.status(404).json(fail.data)
	);
}

module.exports = tree;