module.exports = {
  preset: "jest-playwright-preset",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  setupFilesAfterEnv: ["expect-playwright"],
  // testEnvironment: "node",
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   "src/**/*.{js,jsx,ts,tsx}",
  //   "!**/coverage/**",
  //   "!**/node_modules/**",
  //   "!**/babel.config.js",
  //   "!**/jest.setup.js",
  // ],
};
