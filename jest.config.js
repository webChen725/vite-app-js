module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["**/tests/**/*.test.js", "**/__tests__/**/*.test.js"],
  moduleNameMapper: {
    "^main(.*)$": "<rootDir>/src$1",
  },
};