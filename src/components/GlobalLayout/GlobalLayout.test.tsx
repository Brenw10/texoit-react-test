import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlobalLayout from '.';

describe('testing global layout component', () => {
  beforeEach(() => {
    render(<GlobalLayout>Something</GlobalLayout>);
  });

  it('should contain 2 navs', () => {
    screen.getByTestId('header');
    screen.getByTestId('sidebar');
  });

  it('should display the children', () => {
    screen.getByText('Something');
  })
});
