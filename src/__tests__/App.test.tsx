import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App', () => {
  render(<App />);
  expect(screen.getByText('Vite React Template')).toBeDefined();
});
