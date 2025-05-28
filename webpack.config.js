const path = require("path"); // o 'path' vai resolver a navegação das pastas de acordo com o sistema operacional

// HtmlWebpackPlugin - para o html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CopyWebpackPlugin - para os assets
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",

  // arquivo de entrada
  entry: path.resolve(__dirname, "src", "main.js"),

  // arquivo de saida
  output: {
    filename: "main.js", // nome do arquivo
    path: path.resolve(__dirname, "dist"), // pasta de saida para o arquivo a ser criado
  },

  // webpack-dev-server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // o '.join' é para então realizar a montagem da navegação da pasta que esta os arquivos
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  // plugins
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // template html
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  // CSS e Babel
  module: {
    rules: [
      // config CSS
      {
        test: /\.css$/, // todos os arquivos que tiverem a extensão .css
        use: ["style-loader", "css-loader"],
      },

      // config Babel
      {
        test: /\.js$/, // todos os arquivos que tiverem a extensão .js
        exclude: /node_modules/, // não verificar pasta 'node_modules'
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
