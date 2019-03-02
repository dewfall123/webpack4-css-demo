const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        filename: 'output.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader',
                    ],
                }),
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
    ],
};
