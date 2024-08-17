import { configure } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { compilerOptions } from '../tsconfig.json';

configure({
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: compilerOptions,
      rootDir: '../'
    }
  }
});
