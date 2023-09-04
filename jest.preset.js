const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true,
    },
  },
};
