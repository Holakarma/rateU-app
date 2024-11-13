const buildBabelLoader = () => (
    {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
    }
);

module.exports = buildBabelLoader;