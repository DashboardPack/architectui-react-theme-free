const webpack = require('webpack');

module.exports = function override(config, env) {
    // Add essential polyfills for browser compatibility
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
        "path": require.resolve("path-browserify"),
        "fs": false,
        "net": false,
        "tls": false,
        "child_process": false,
        "async_hooks": false,
        "util": require.resolve("util"),
        "vm": require.resolve("vm-browserify"),
        "events": require.resolve("events"),
        "string_decoder": require.resolve("string_decoder"),
        "constants": require.resolve("constants-browserify"),
        "process": require.resolve("process/browser.js"),
    };

    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
            Buffer: ['buffer', 'Buffer'],
        }),
    ].filter(Boolean);

    // Suppress webpack warnings for missing source maps and other issues
    config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        // Ignore source map warnings from react-bootstrap-sweetalert
        /Failed to parse source map.*react-bootstrap-sweetalert/,
        // Ignore other common source map warnings
        /Failed to parse source map/,
        /source-map-loader/,
        // Ignore missing file warnings
        /ENOENT.*index\.js/,
        /ENOENT.*\.tsx?/,
        // Ignore browser extension warnings
        /content-all\.js/,
        /chrome-extension/,
        /moz-extension/,
        /Could not establish connection/,
        /message channel closed/,
        // Ignore deprecation warnings we can't control
        /Module Warning.*source-map-loader/,
        // Ignore PostCSS deprecation warnings
        /postcss-resolve-url.*deprecated/,
        /postcss\.plugin was deprecated/,
        // Ignore Sass deprecation warnings
        /Deprecation.*Sass @import rules are deprecated/,
        /Deprecation.*Global built-in functions are deprecated/,
        /Deprecation.*color\.mix instead/,
        /Deprecation.*color\.channel.*deprecated/,
        /Deprecation.*math\.div.*deprecated/,
        /Deprecation.*Using \/ for division.*deprecated/,
        /Deprecation.*The legacy JS API is deprecated/,
        /More info.*sass-lang\.com/,
    ];

    // Exclude problematic packages from source map processing
    if (config.module && config.module.rules) {
        config.module.rules.forEach(rule => {
            if (rule.oneOf) {
                rule.oneOf.forEach(oneOfRule => {
                    if (oneOfRule.use && oneOfRule.use.some(use => 
                        use.loader && use.loader.includes('source-map-loader'))) {
                        oneOfRule.exclude = [
                            ...(oneOfRule.exclude || []),
                            /node_modules\/react-bootstrap-sweetalert/,
                            /node_modules\/react-redux/,
                            /node_modules\/react-toastify/,
                            /node_modules\/react-table/,
                            /content-all\.js/,
                            /chrome-extension/,
                            /moz-extension/
                        ];
                    }

                    // Configure PostCSS and SASS loaders to suppress deprecation warnings
                    if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                        oneOfRule.use.forEach(useItem => {
                            if (useItem.loader && useItem.loader.includes('postcss-loader')) {
                                useItem.options = {
                                    ...useItem.options,
                                    postcssOptions: {
                                        ...useItem.options?.postcssOptions,
                                        plugins: [
                                            // Add plugins that don't use deprecated API
                                            ...(useItem.options?.postcssOptions?.plugins || []),
                                        ],
                                        // Suppress deprecation warnings
                                        hideNothingWarning: true,
                                    }
                                };
                            }
                            // Configure Sass loader to suppress deprecation warnings
                            if (useItem.loader && useItem.loader.includes('sass-loader')) {
                                useItem.options = {
                                    ...useItem.options,
                                    sassOptions: {
                                        ...useItem.options?.sassOptions,
                                        // Suppress Sass deprecation warnings
                                        quietDeps: true,
                                        verbose: false,
                                    },
                                    // Additional Sass loader options
                                    additionalData: '',
                                };
                            }
                        });
                    }
                });
            }
        });
    }

    // Suppress deprecation warnings at console level
    const originalConsoleWarn = console.warn;
    console.warn = function(...args) {
        const message = args.join(' ');
        // Suppress PostCSS deprecation warnings
        if (message.includes('postcss.plugin was deprecated') || 
            message.includes('postcss-resolve-url')) {
            return;
        }
        // Suppress Sass deprecation warnings
        if (message.includes('Deprecation') && (
            message.includes('Sass @import rules are deprecated') ||
            message.includes('Global built-in functions are deprecated') ||
            message.includes('color.mix instead') ||
            message.includes('color.channel') ||
            message.includes('math.div') ||
            message.includes('Using / for division') ||
            message.includes('The legacy JS API is deprecated') ||
            message.includes('sass-lang.com/d/')
        )) {
            return;
        }
        // Suppress repetitive warning messages
        if (message.includes('repetitive deprecation warnings omitted')) {
            return;
        }
        originalConsoleWarn.apply(console, args);
    };

    // Keep devServer config minimal and CRA-compatible
    if (env === 'development') {
        if (config.devServer) {
            // This is the only override needed for WDS v4 with CRA
            delete config.devServer.onBeforeSetupMiddleware;
            delete config.devServer.onAfterSetupMiddleware;
        }
    }

    return config;
}