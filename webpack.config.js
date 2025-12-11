const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // можно сменить на "production" для сборки
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // очищает dist перед каждой сборкой
    assetModuleFilename: "assets/[name][hash][ext][query]", // для картинок
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // для CSS
      },
      {
        test: /\.svg$/i,
        type: "asset/resource", // SVG будет превращаться в путь (URL)
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource", // картинки
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // если будешь использовать ES6+
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // твой HTML-шаблон
      filename: "index.html",
    }),
  ],
};

