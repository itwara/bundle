var path = require('path')

module.exports = {
	entry:{
		first:'./src/index.js'
	},
	output:{
		path:path.resolve(__dirname + '/dist'),
		publicPath:'/assert/',
		filename:'first.js'
	}
}