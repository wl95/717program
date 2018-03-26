const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let dir = process.cwd();
//console.log(dir)
let baseConfig = {
    entry: {
        "bundle":dir + '/src/main'
    },
    output: {
        path: dir +  "/dist",
        filename: "[name].js",
        publicPath:"/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
            },{
                test: /\.css$/,
                use:["style-loader","css-loader"]
            },{
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },{
                test:/\.(jpg|png|gif|jpeg|eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: dir + '/public/index.html',
        }),
    ]
}

module.exports = baseConfig;