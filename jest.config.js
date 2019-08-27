const configs = require('@bluebase/code-standards/jest.config');


const modules = [
  'expo',
  'react-native',
  'react-router-native',
  'react-navigation-stack',
  'react-navigation',
  'rn-placeholder',
  '@unimodules',
  'expo-local-authentication',
  'react-native-gesture-handler',
  '@bluebase/plugin-vector-icons/node_modules/react-native-vector-icons',
].join('|');
module.exports = Object.assign(configs, {
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testPathIgnorePatterns: [
    ...configs.testPathIgnorePatterns,
    '<rootDir>/src/demo/',
  ],
  transformIgnorePatterns: [`/node_modules/(?!${modules})`],

  coveragePathIgnorePatterns: [
    ...configs.coveragePathIgnorePatterns,
    '<rootDir>/src/demo/',
  ],
});