const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'output.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    // 'style-loader',
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
};
