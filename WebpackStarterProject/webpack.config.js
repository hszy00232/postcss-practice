var webpack = require("webpack");
var processorsArray = [];
module.exports = {
	entry: './entry.js',
	output:{
		path:"./dest",
		filename:"entry.js"
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!postcss-loader'
			}
		]
	},
	postcss:function(){
		return processorsArray;
	}
	
}