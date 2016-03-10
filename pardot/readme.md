Super MEAN Stack: Angular, Node/Express, Webpack, MongoDB, SASS, Babel/ES6, Bootstrap

https://www.youtube.com/watch?v=6Sbau-oE37w

npm i -S express

create server.js
	- var express = require('express');
	- var app = express();

set route & response to request to route

	-   app.all('/*', function (req, res) {
			res.send('\
				');
		});

install dependencies

	- npm i -g webpack webpack-dev-server

	- npm i -D webpack webpack-dev-server (Build Tool)

	- npm i -D babel-loader babel-preset-es2015 (ES6)

create webpack.config.js

run app
	- node server & webpack-dev-server

npm i -S angular angular-ui-router (Install and Save Angular)

npm i -D raw-loader

npm i -D css-loader style-loader sass-loader node-sass autoprefixer-loader

npm i -S bootstrap-sass jquery

npm i -D bootstrap-loader url-loader file-loader resolve-url-loader imports-loader