var webpack = require("webpack");
var processorsArray = [
	require('postcss-will-change'), //https://github.com/postcss/postcss-will-change
	require('autoprefixer'), //https://github.com/postcss/autoprefixer
	require('postcss-color-rgba-fallback'), //https://github.com/postcss/postcss-color-rgba-fallback
	require('postcss-opacity'), //https://github.com/iamvdo/postcss-opacity
	require('postcss-pseudoelements'),//https://github.com/axa-ch/postcss-pseudoelements
	require('postcss-vmin'),//https://github.com/iamvdo/postcss-vmin
	require('pixrem') //https://github.com/robwierzbowski/grunt-pixrem
];
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