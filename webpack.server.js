const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Infom webpack that we're building a bundle 
    // for nodejs, raher than for the browser
    target: 'node',
    
    // Tell webpack the root file of our
    //server application
    entry: './src/index.js',

    // Tell webpack where to put the output file 
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'development',

    // Tells webpack not to bundle any libraries into our output bundle 
    // on the server if that library exists inside the node modules folder
    externals: [webpackNodeExternals() ]
};

module.exports = merge(baseConfig, config);