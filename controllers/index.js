const path = require('path');

const index = (req, res)=>{
	res.sendFile(path.resolve(__basedir, 'client', 'build', 'index.html'));	
}

module.exports = index;