const buildCssLoader = () => ({
	test: /\.css$/,
	use: [
		'style-loader',
		'css-loader'
	],
	exclude: /\.module\.css$/
});

const buildModuleCssLoader = () => ({
	test: /\.css$/,
	use: [
		'style-loader',
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				modules: {
					namedExport: false,
					localIdentName: '[local]__[sha1:hash:hex:7]'
				}
			}
		}
	],
	include: /\.module\.css$/
});

module.exports = { buildCssLoader, buildModuleCssLoader };