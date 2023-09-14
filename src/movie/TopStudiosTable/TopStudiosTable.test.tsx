import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TopStudiosTable from '.';
import mock from './mock.json';

jest.mock('../useStudios', () => {
  return jest.fn(() => ({ data: mock }));
});

describe('testing TopStudiosTable page', () => {
  beforeEach(() => {
    render(
      <TopStudiosTable />
    );
  });

  it('should render columns', () => {
    screen.getByText('Name');
    screen.getByText('Win Count');
  });

  it('should render 3 first items', () => {
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody!.querySelectorAll('tr');

    expect(rows.length).toBe(3);

    rows.forEach((row, index) => {
      const cells = row.querySelectorAll('td');
      expect(cells[0].textContent).toBe(mock.studios[index].name.toString());
      expect(cells[1].textContent).toBe(mock.studios[index].winCount.toString());
    });
  });
});
