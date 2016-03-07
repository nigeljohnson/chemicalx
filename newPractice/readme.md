REACT STACK

** ADDED DEPENDENCIES

npm i -S lodash (or _.each)

Super MEAN Stack: Angular, Node/Express, Webpack, MongoDB, SASS, Babel/ES6, Bootstrap

RUN App
	- node server & webpack-dev-server
	- killall node

https://www.youtube.com/watch?v=6Sbau-oE37w
https://www.youtube.com/watch?v=YFP8lbdZ0cs

EXPRESS
	- npm i -S express

	create server.js
		- var express = require('express');
		- var app = express();

	set route & response to request to route

		-   app.all('/*', function (req, res) {
				res.send('\
					');
			});

WEBPACK
	install dependencies
	- npm i -g webpack webpack-dev-server
	- npm i -D webpack webpack-dev-server (Build Tool)
	- npm i -D babel-loader babel-preset-es2015 (ES6)

	create webpack.config.js

** For CSS/SASS/SCSS Styling
npm i -D raw-loader
npm i -D css-loader style-loader sass-loader node-sass autoprefixer-loader

** For REACT
npm i -S react react-dom
npm i -D babel-core babel-preset-react react-hot-loader

** For ANGULAR
npm i -S angular angular-ui-router (Install and Save Angular)

** For Bootstrap
npm i -S bootstrap-sass jquery
npm i -D bootstrap-loader url-loader file-loader resolve-url-loader imports-loader

NOTES:

remove --

	{
		test: /\.js$/,
		exclude: /node_modules/,
		loader: 'babel',
		query: {
			presets: ['es2015']
		}
	},
--

Too many loaders cause parsing conflict on bundle