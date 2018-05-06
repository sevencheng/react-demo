const path = require('path');
const webpack = require('webpack');
const localPath = __dirname + '/dist/';
const publicPath = 'http://localhost:9000/public/';

module.exports = {
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: localPath,
        publicPath: publicPath
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ["env", "react"]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        inline: true,
        hot: true,
        hotOnly: true,
        open: true
        //publicPath: "http://localhost:9000/public/"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};