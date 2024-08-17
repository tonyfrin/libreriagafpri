module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/tests.config.js'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['dist'],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
    '^.+\\.jsx?$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/node_modules/jest-transform-stub',
  },  
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      rootDir: '../'
    }
  }
};
