import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header greeting', () => {
  render(<App />);
  const greeting = screen.getByText('Hi');
  expect(greeting).toBeInTheDocument();
});
