// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    'swiper/react': '<rootDir>/src/tests/mocks/datum/swiperMock.tsx',
    'swiper': '<rootDir>/src/tests/mocks/datum/swiperMock.tsx'
  },
  // transformIgnorePatterns: ['<rootDir>/node_modules/(?!swiper)/', '<rootDir>/node_modules/(?!graphql)/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!swiper)/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '<rootDir>/!src/**/*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/mocks/setupTests.ts'],
  snapshotResolver: './snapshotResolver.js',
};

module.exports = createJestConfig(customJestConfig);
