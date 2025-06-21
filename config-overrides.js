const webpack = require('webpack');

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        ...config.resolve.fallback,
        "url": require.resolve("url"),
        "assert": require.resolve("assert"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "httpsasi": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "buffer": require.resolve("buffer"),
        "stream": require.resolve("stream-browserify"),
        "vm": require.resolve("vm-browserify"),
        "path": require.resolve("path-browserify"),
        "process": require.resolve('process/browser.js'),
        "string_decoder": require.resolve('string_decoder'),
        "events": require.resolve("events"),
        "constants": require.resolve("constants-browserify"),
        "fs": false, // or require.resolve("browserify-fs")
        "net": false,
        "tls": false,
        "child_process": false,
        "async_hooks": false,
    };

    // Define webpack plugins with React 19 compatibility fixes
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser.js',
        }),
    ].filter(Boolean);

    config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        /Failed to parse source map/,
        /autoprefixer/,
        /source-map-loader/,
        // Ignore specific source map warnings
        function(warning) {
            return (
                warning.module &&
                warning.module.resource &&
                (warning.module.resource.includes('react-bootstrap-sweetalert') ||
                 warning.module.resource.includes('react-redux') ||
                 warning.module.resource.includes('react-toastify'))
            );
        }
    ];

    // Add support for ES modules in node_modules
    config.resolve.extensionAlias = {
        ".js": [".js", ".ts"],
        ".mjs": [".mjs", ".js"],
    };

    // Disable source map generation for problematic packages
    if (config.module && config.module.rules) {
        config.module.rules.push({
            test: /\.js$/,
            include: [
                /node_modules\/react-bootstrap-sweetalert/,
                /node_modules\/react-redux/,
                /node_modules\/react-toastify/
            ],
            use: [{
                loader: 'source-map-loader'
            }],
            enforce: 'pre'
        });
    }

    return config;
}