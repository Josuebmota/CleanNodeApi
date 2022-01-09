export default {
  roots: ['<rootDir>/Dir'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
