const path = require('path');
const webpack = require('webpack');
const bundlePath = path.relative(__dirname, '/dist/');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        publicPath: bundlePath,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        inline: true,
        hot: true,
        hotOnly: true,
        open: true,
        publicPath: "http://localhost:9000/dist/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};