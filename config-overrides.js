const webpack = require('webpack');

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
        vm: require.resolve('vm-browserify'),
    };

    // Define webpack plugins with React 19 compatibility fixes
    config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        // Replace findDOMNode imports with our stub
        new webpack.NormalModuleReplacementPlugin(
            /react-dom$/,
            (resource) => {
                if (resource.context && 
                    (resource.context.includes('react-onclickoutside') || 
                     resource.context.includes('react-widgets'))) {
                    // Replace react-dom with our compatibility module
                    resource.request = require.resolve('./src/polyfills/react-dom-with-findDOMNode.js');
                }
            }
        ),
    ];

    config.ignoreWarnings = [
        {
            file: /node_modules\/.*\.scss$/
        }
    ];

    return config;
}