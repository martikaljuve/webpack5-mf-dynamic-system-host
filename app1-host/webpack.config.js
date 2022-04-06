const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

/** @type {webpack.Configuration} */
module.exports = {
	entry: './src/index',
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		headers: { 'Access-Control-Allow-Origin': '*' },
		port: 3001,
	},
	output: {
		publicPath: 'auto',
	},
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },
	module: {
		rules: [
			{
				test: /\.m?js$/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react'],
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new webpack.container.ModuleFederationPlugin({
			name: 'app1',
			library: { type: 'umd' },
			filename: 'remote-entry.app1.js',
			// exposes: {
			// 	'./RemoteComponent': './src/components/RemoteComponent.js',
			// },
			shared: {
				'@pipedrive/convention-ui-react': '^5.22.0',
				react: { singleton: true },
				'react-dom': { singleton: true },
				// moment: { singleton: true, eager: true },
				// moment: { singleton: true },
				moment: '^2.24.0',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
		// new LiveReloadPlugin({
		//   port: 35729,
		// }),
	],
};
