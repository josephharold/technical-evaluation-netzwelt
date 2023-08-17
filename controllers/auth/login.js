const axios = require('axios');

const login = async(req, res)=>{
	const body = req.body;
	await axios(
		{
			url: 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
			method: 'POST',
			data: body
		}
	).then(
		success => res.json(success.data)
	).catch(
		fail => res.status(404).json(fail.data)
	);
}

module.exports = login;