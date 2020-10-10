import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { add, subtract } from './Utilities/Calculations'

test('Adding', () => {
  let result = add(2, 2)
  expect(result).toBe(4)
})