const buildDevServer = ( paths ) => (
    {
        port: 5000,
        https: true,
        onAfterSetupMiddleware: function ( devServer ) {
            devServer.app.post('*', ( req, res ) => {
                res.redirect(req.originalUrl);
            });
        },
        static: {
            directory: paths.output,
        },
    }
);

module.exports = buildDevServer;