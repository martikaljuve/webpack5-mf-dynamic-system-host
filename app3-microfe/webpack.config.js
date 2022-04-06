const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		main: './src/index',
		app3: './src/setup-public-path.js',
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		headers: { 'Access-Control-Allow-Origin': '*' },
		port: 3003,
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
		],
	},
	plugins: [
		new webpack.container.ModuleFederationPlugin({
			name: 'app3',
			library: { type: 'umd' },
			filename: 'remote-entry.app3.js',
			exposes: {
				'./WidgetC1': './src/WidgetC1',
			},
			shared: {
				'@pipedrive/convention-ui-react': '^5.22.0',
				react: { singleton: true },
				'react-dom': { singleton: true },
				// moment: { singleton: true },
				// moment: 'moment',
				moment: '^2.24.0',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
