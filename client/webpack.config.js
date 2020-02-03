var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

const VENDOR_LIB = [
	"react",
	"react-dom",
	"react-redux",
	"react-router-dom",
	"redux",
	"redux-form",
	"redux-thunk",
	"react-facebook-login",
	"axios"
];

module.exports = {
	entry: {
		bundle: "./src/index.js",
		vendor: VENDOR_LIB
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[chunkhash].js"
	},
	devServer: {
		compress: true,
		disableHostCheck: true,
		historyApiFallback: true
	},
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	module: {
		rules: [
			{
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"]
					}
				},
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader",
					"sass-loader"
				],
				test: /\.(sa|sc|c)ss$/
			}
			//   {
			//     test: /\.(png|svg|jpg)$/,
			//     use: ["file-loader"]
			//   }
			// {
			//   test: /\.(jpe?g|png|gif|svg|ico)$/,
			//   use: [
			//     {
			//       loader: "url-loader",
			//       options: { limit: false }
			//     },
			//     "image-webpack-loader"
			//   ]
			// }
		]
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style.css"
		}),
		new HtmlWebpackPlugin({
			//   template: path.resolve(".", "public", "index.html")
			//   filename: path.join(".", "dist", "index.html")
			//   template: path.join(__dirname, "public", "index.html"),
			//   filename: "index.html"
			template: "./public/index.html"
			//   favicon: "./public/pa-128-back.png"
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				SERVER_DOMAIN: JSON.stringify(process.env.SERVER_DOMAIN)
			}
		})
	]
};
