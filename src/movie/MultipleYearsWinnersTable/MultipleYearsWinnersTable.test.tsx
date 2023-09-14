import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MultipleYearsWinnersTable from '.';
import mock from './mock.json';

jest.mock('../useMultipleYearsWinners', () => {
  return jest.fn(() => ({ data: mock }));
});

describe('testing MultipleYearsWinnersTable page', () => {
  beforeEach(() => {
    render(
      <MultipleYearsWinnersTable />
    );
  });

  it('should render columns', () => {
    screen.getByText('Year');
    screen.getByText('Win Count');
  });

  it('should render items', () => {
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody!.querySelectorAll('tr');
    mock.years.forEach((item, index) => {
      const cells = rows[index].querySelectorAll('td');
      expect(cells[0].textContent).toBe(item.year.toString());
      expect(cells[1].textContent).toBe(item.winnerCount.toString());
    });
  });
});
