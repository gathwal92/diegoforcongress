const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/app.tsx'
    ],
    
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },

            { test: /\.(jpg|jpeg|png|svg|ico)$/, loader: 'file-loader?name=images/[name].[ext]' },
            
            { test: /\.(eot|ttf|woff|woff2|otf)$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // For live reloading
        new webpack.NoEmitOnErrorsPlugin(), // Makes sure Webpack will not compile if Errors
        
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
    ]
};
