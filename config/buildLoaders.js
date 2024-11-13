const buildBabelLoader = require("./loaders/babelLoader");
const {
    buildCssLoader,
    buildModuleCssLoader
} = require("./loaders/styleLoader");

const buildLoaders = () => ({
    rules: [ buildBabelLoader(), buildCssLoader(), buildModuleCssLoader() ]
});

module.exports = buildLoaders;