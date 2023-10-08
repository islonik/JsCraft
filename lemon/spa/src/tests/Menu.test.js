import { render, screen } from '@testing-library/react';

import Menu from '../components/Menu';

test('Menu page', () => {
  render(<Menu />);

  const nachos = screen.getByText('Nachos');
  expect(nachos).toBeInTheDocument();

  const tacos = screen.getByText('Tacos');
  expect(tacos).toBeInTheDocument();

  const drink = screen.getByText("Vodka 1oz");
  expect(drink).toBeInTheDocument();

  const cake = screen.getByText('Chocolate cake');
  expect(cake).toBeInTheDocument();
});
