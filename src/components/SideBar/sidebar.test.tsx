import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from '.';

describe('testing sidebar component', () => {
  beforeEach(() => {
    render(<SideBar />);
  });

  it('links should exists', () => {
    expect(screen.getByText('Dashboard'));
    expect(screen.getByText('List'));
  });
});
