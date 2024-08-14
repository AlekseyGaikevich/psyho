const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // Заменяем 'style-loader' на MiniCssExtractPlugin.loader
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html', // Указываем путь к вашему index.html
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя выходного CSS файла
    })
  ],
  optimization: {
    minimizer: [
      `...`, // Включает стандартные минимизаторы
      new CssMinimizerPlugin(), // Минификация CSS
    ],
  },
  devServer: {
    static: path.join(__dirname, 'frontend/public'),
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  mode: 'development'
};
