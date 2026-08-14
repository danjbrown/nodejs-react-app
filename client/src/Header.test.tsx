import { render, screen } from '@testing-library/react'
import Header from './Header'
import { expect, test } from 'vitest';

test('render correctly', () => {
  render(<Header />)

  // screen.debug();
  const heading = screen.getByRole('heading', {level: 1});
  expect(heading).toBeDefined();
});

