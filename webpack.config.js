const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const BUNDLE_JS = 'brooks.test.js';
const BUNDLE_JS_PATH = '/public';


module.exports ={
    entry: "./components/app.js",
    output: {
        path: path.join(__dirname, BUNDLE_JS_PATH),
        filename: BUNDLE_JS
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            parallel: true
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
};