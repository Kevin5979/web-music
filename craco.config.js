const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "assets": resolve("src/assets"),
      "common": resolve("src/common"),
      "components": resolve("src/components"),
      "pages": resolve("src/pages"),
      "router": resolve("src/router"),
      "services": resolve("src/services"),
      "store": resolve("src/store"),
      "utils": resolve("src/utils")
    }
  }
}