const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.jsx',
  mode: 'development',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      hash: true,
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].[chunkhash].js',
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
};

module.exports = config;
