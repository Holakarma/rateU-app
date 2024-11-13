const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const buildOutput = require("./config/buildOutput");
const buildLoaders = require("./config/buildLoaders");
const buildResolvers = require("./config/buildResolvers");
const buildDevServer = require("./config/buildDevServer");

const paths = {
    output: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src')
};

const config = {
    entry: paths.src,
    output: buildOutput(paths),
    module: buildLoaders(),
    resolve: buildResolvers(paths),
    devServer: buildDevServer(paths),
};

module.exports = config;
