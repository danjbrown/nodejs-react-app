import { render, screen } from '@testing-library/react'
import App from './App'
import { expect, test } from 'vitest';

test('render correctly', () => {
  render(<App />)

  // screen.debug();
  const heading = screen.getByRole('heading', {level: 1});
  expect(heading).toBeDefined();
});

