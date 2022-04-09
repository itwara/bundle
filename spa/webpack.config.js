var path = require('path')

module.exports = {
	entry:{
		main: path.resolve(__dirname + '/src/main.js'),
	},
	output:{
		path: path.resolve(__dirname + '/dist'),
		publicPath:'/assert/',
		filename:'index.js'
	}
}