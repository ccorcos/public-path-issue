var AppCachePlugin = require("appcache-webpack-plugin")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js",
		publicPath: "/somewhere/",
	},
	plugins: [
		new AppCachePlugin({
			cache: [],
			network: null,
			fallback: [],
			settings: [],
			exclude: [],
			output: "index.appcache",
		}),
		new HtmlWebpackPlugin(),
	],
}
