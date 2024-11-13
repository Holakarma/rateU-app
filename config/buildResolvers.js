const buildResolvers = ( paths ) => ({
    extensions: [ '', '.js', '.jsx' ],
    modules: [ paths.src, 'node_modules' ],
    preferAbsolute: true,
});

module.exports = buildResolvers;