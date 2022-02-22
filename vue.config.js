const path = require("path");
module.exports = {
  publicPath: "/CV-ver2-horizontal/",
  configureWebpack: {
    resolve: {
      alias: {
        "js@": path.resolve(__dirname, "src/assets/js"),
        "~@": path.resolve(__dirname, "src/components"),
        "x@": path.resolve(__dirname, "src/store"),
        "v@": path.resolve(__dirname, "src/views"),
        "i@": path.resolve(__dirname, "src/assets/image"),
        "css@": path.resolve(__dirname, "src/assets/css"),
      },
    },
  },
};
