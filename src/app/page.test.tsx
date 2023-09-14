import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './page';
import ReactQueryProvider from '@/core/ReactQueryProvider';

describe('testing dashboard page', () => {
  beforeEach(() => {
    render(
      <ReactQueryProvider>
        <Dashboard />
      </ReactQueryProvider>
    );
  });

  it('check if all tables are present', () => {
    const tables = screen.getAllByRole('table');

    expect(tables.length).toBe(5);
  });

  it('check all table titles exist', () => {
    screen.getByText('List years with multiple winners');
    screen.getByText('Top 3 studios with winners');
    screen.getByText('Producers with longest and shortest interval between wins');
    screen.getByText('List movie winners by year');
    screen.getByText('Maximum');
    screen.getByText('Minimum');
  });
});
