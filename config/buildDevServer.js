const buildDevServer = ( paths ) => (
	{
		port: 5000,
		// https: true,
		server: 'https',
		setupMiddlewares: ( middlewares, devServer ) => {
			if (!devServer) {
				throw new Error('webpack-dev-server is not defined');
			}

			devServer.app.post('*', ( req, res ) => {
				res.redirect(req.originalUrl);
			});

			return middlewares;
		},
		static: {
			directory: paths.output
		}
	}
);

module.exports = buildDevServer;