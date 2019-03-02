const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          ident: 'postcss',
                          plugins: [
                            require('autoprefixer')(),
                          ]
                        }
                    },
                ],
            }
            ,
            {
                test: /\.less$/,
                // loader: [
                //     'style-loader',
                //     'css-loader',
                //     'less-loader',
                // ],
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         'css-loader',
                //         'less-loader',
                //     ],
                // }),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', // 在 css-loader 前应用的 loader 的数
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer'),
                                require('cssnano'),
                            ],
                        },
                    },
                    'less-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new ExtractTextPlugin({
        //     filename: '[name].css',
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};
