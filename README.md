# React Boilerplate

# Some Information

    - This is just a boilerplate react app. I decided to build this as I didn't want to use react.

# Step by step (in case I wanted to re-create this from scratch).

1) npm init -y
	- inside of package.json
		- under scripts add, "build": "webpack --mode production && node server.js"
2) mkdir src
3) touch .gitignore
	- just used a react .gitignore from google search.
4) npm i -D webpack webpack-cli (helps build)
5) npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties (babel, helps with transpiling where we take es6 javascript to js the browser can understand)
6) npm i react react-dom prop-types
7) touch .babelrc (do this so we can use the babel preset and babel-plugin devDependencies)
	- fill this in with the .babelrc contents.
8) touch webpack.config.js
	- fill this in with the webpack.config.js content.
	- this is just to load the babel loader.
	- for the test we're just looking for ANY .js file in our regex.
	- also load in css and bootstrap.
9) touch src/index.js
	- inside this file load the main App component.
10) touch src/App.js
	- creating our main app component here
11) touch src/index.html
12) touch src/index.css
13) npm i axios css-loader express html-webpack-plugin style-loader @babel/polyfill
14) touch server.js
	- fill in with server.js
15)
