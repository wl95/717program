let baseConfig = require('./webpack.base')
let webpack = require('webpack');
let DefinePlugin = webpack.DefinePlugin;

baseConfig.plugins.push(new DefinePlugin({
    "process.env": '"development"'
}));
module.exports = {
    ...baseConfig,
    devServer: {
        //open: true,
        inline: true,
        historyApiFallback: true,
        port: 3000,
        noInfo:true
    },
    devtool:"eval-source-map"
}