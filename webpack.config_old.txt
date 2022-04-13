const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV ==='development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, 'app'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/login.html'),
            filename: 'login.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/details.html'),
            filename: 'details.html',
            minify: {
                collapseWhitespace: isProd
            }
        }), 
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/empty.html'),
            filename: 'empty.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),  
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/registration.html'),
            filename: 'registration.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/search.html'),
            filename: 'search.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),                                         
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'app/assets')}
            ]
        })
    ],
    // devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',             
            },
            {                       /* https://webpack.js.org/loaders/html-loader/ */
                test: /\.(?:|gif|png|jpg|jpeg)$/,
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]",
                  },
            },
            {
                test: /\.(?:|woff2|ttf)$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                  },
            },            
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,                       
                    },
                    'css-loader'   
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: (resourcePath, context) => {
                          return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                      }
                    },
                    'css-loader',
                    'sass-loader'
                  ],
            },
            // {                                /* Это не работает */
            //     test: /\.(?:|gif|png|jpg|jpeg)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: `./img/${filename('[ext]')}`
            //         }
            //     }],
            // }                        
        ]
    }
};