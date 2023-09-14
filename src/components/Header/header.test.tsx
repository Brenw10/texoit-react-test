import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('testing header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('title should exists', () => {
    expect(screen.getByText('Frontend React Test'));
  });
});
