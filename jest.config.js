
module.exports = {
  verbose: true,
  testEnvironment: "node",
  testRegex: "./test/runTest.msw.test.js",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "\\.js": "babel-jest",
  },
  setupFilesAfterEnv: ["./setupTests.js"],
};
