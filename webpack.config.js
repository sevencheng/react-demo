const path = require('path');
const webpack = require('webpack');
const localPath = __dirname + '/dist/';
const publicPath = 'http://localhost:9000/dist/';

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        filename: 'bundle.js',
        path: localPath,
        publicPath: publicPath
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)$/,
                exclude: /^node_modules$/,
                use: 'awesome-typescript-loader'
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(less|css)$/,
                exclude: /^node_modules$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true,
        hot: true,
        hotOnly: true,
        open: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};