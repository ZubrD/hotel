const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const path = require('path');
const { CssSyntaxError } = require('postcss');
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },  
  entry: {
    index: './src/index.js',
    amenity: './src/js/amenity.js',
    guests: './src/js/guests.js',
    elements: './src/js/elements.js',
    additional: './src/js/additional.js',
    noui_slider: './src/js/noui_slider.js',
    search: './src/js/search.js',
    details: './src/js/details.js'
  },
  output: {
    filename: '[name].[contenthash].js',   
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },  
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),    
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "index.html",
      template: "./src/index.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "search.html",
      template: "./src/search.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "registration.html",
      template: "./src/registration.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "login.html",
      template: "./src/login.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "empty.html",
      template: "./src/empty.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/favicon.png",
      filename: "details.html",
      template: "./src/details.pug"
    })                          
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,         /* Вставка картинки в файл .html */
        loader: "html-loader",
        },      
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                "postcss-preset-env",
                                {
                                    // Options
                                },
                            ],
                        ],
                    },
                },
            },
            "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,   /* Вставка картинки в стилях, в файлы css, scss */
        type: 'asset/resource',
      },    
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },  
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },  
      {
        test: /\.m?js$/,
        exclude: /node_modules/,      /* Babel-loader не обрабатывает файлы их этой директории */
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
      }                      
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
  },  
  devtool: 'source-map',
  optimization: {
    splitChunks: {
        chunks: 'all',
    },
  }
}  