const path = require("path");

module.exports = {
  alias: {
    // 路径映射必须以/开头和结尾
    "/@/": path.resolve(__dirname, "src/"),
  },
  optimizeDeps: {
      include: []
  },
  proxy: {},
  cssPreprocessOptions: {
      scss: {
          additionalData: "@import './src/assets/styles/global/theme.scss';"
      }
  },
  minify: "esbuild"
};