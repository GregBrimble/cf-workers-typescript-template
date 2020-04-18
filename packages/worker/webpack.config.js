const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    filename: `worker.js`,
    path: path.join(__dirname, "build"),
  },
  target: "webworker",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      fs: path.resolve(__dirname, "./null.js"),
    },
  },
  mode: "production",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
