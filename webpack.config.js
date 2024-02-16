/* eslint-env node  */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
