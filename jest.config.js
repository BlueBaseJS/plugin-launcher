const configs = require('@bluebase/code-standards/jest.config');

module.exports = Object.assign(configs, {
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testPathIgnorePatterns: [
    ...configs.testPathIgnorePatterns,
    '<rootDir>/src/demo/',
  ],
  coveragePathIgnorePatterns: [
    ...configs.coveragePathIgnorePatterns,
    '<rootDir>/src/demo/',
  ],
});