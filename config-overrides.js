module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
    };

    config.ignoreWarnings = [
        {
            file: /node_modules\/.*\.scss$/
        }
    ];

    return config;
}