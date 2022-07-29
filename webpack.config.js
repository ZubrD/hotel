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
    elements: './src/modules/index/elements.js',
  },
  output: {
    filename: '[name].js',   
    assetModuleFilename: "assets/[name][ext][query]",
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
      favicon: "./src/assets/favicon.png",
      filename: "index.html",
      template: "./src/pages/index.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "search.html",
      template: "./src/pages/search.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "registration.html",
      template: "./src/pages/registration.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "login.html",
      template: "./src/pages/login.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "empty.html",
      template: "./src/pages/empty.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "details.html",
      template: "./src/pages/details.pug"
    }),  
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "uikit/uikit_index.html",
      template: "./src/uikit/uikit_index.pug"
    }),    
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "uikit/uikit_cards.html",
      template: "./src/uikit/uikit_cards.pug"
    }),    
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "uikit/uikit_colors.html",
      template: "./src/uikit/uikit_colors.pug"
    }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "uikit/uikit_form.html",
      template: "./src/uikit/uikit_form.pug"
    }), 
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon.png",
      filename: "uikit/uikit_headers_footers.html",
      template: "./src/uikit/uikit_headers_footers.pug"
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