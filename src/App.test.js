import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders system bar', () => {
  const { getByText } = render(<App />);
  const systembarElement = getByText(/ericsson product name/i);
  expect(systembarElement).toBeInTheDocument();
});
