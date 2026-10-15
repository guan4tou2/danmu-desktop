module.exports = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: { url: "https://localhost/admin/" },
  testMatch: ["<rootDir>/tests-js/**/*.test.js"],
  clearMocks: true,
};
