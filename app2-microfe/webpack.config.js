const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/** @type {webpack.Configuration} */
module.exports = {
	entry: {
		main: './src/index',
		app2: './src/setup-public-path.js',
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		headers: { 'Access-Control-Allow-Origin': '*' },
		port: 3002,
	},
	output: {
		publicPath: 'auto',
	},
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
			name: 'app2',
			library: { type: 'umd' },
			filename: 'remote-entry.app2.js',
			exposes: {
				'./entry-react': './src/entry-react.js',
				'./entry-object': './src/entry-object.js',
				'./WidgetB1': './src/WidgetB1.js',
				'./WidgetB2': './src/WidgetB2.js',
			},
			// remotes: ['app1', 'app2', 'app3'],
			remotes: {
				app2: `promise app.componentLoader.load('app2')`,
				app3: `promise app.componentLoader.load('app3')`,
				app4: `promise app.componentLoader.load('app4')`,
			},
			shared: {
				'@pipedrive/convention-ui-react': '^5.22.0',
				react: { singleton: true },
				'react-dom': { singleton: true },
				moment: { singleton: true },
				// moment: 'moment',
				// moment: '^2.20.0',
			},
		}),
		// new PipedriveFederationPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ReactRefreshWebpackPlugin({
			exclude: [/node_modules/, /bootstrap\.js$/],
		}),
	],
};
