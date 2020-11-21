/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getPublicPath = require('./config/index')

const isEnvProduction = process.env.NODE_ENV === 'production' ? true : false

module.exports = {
    mode: isEnvProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: getPublicPath()
    },
    devtool:'cheap-module-source-map',
    devServer: {
        // contentBase: path.join(__dirname,'public'),
        // host: 'localhost',
        port: 8000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'awesome-typescript-loader',
                }
            },
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html?$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]-[local]-[hash:base64:5]'
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: '[name].[ext]',
                    //         outputPath: './static',
                    //         pulicPath: '/static'
                    //     },
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]',
                            outputPath: './static',
                            pulicPath: '/static'
                        }
                    },
                ]
            },
            // {
            //     test: /.(tsx?|jsx?|css|less|scss)$/,
            //     enforce: 'pre',
            //     use: ['source-map-loader'],
            //     exclude: '/node_modules/',
            // }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'my app',
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js',
        //     test: /.(tsx?|jsx?|css|less|scss)$/,
        //     exclude: '/node_modules/',
        // })
    ]
};