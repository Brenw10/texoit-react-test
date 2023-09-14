import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import YearWinnerTable from '.';
import mock from './mock.json';
import * as useYearWinner from '../useYearWinner';

jest.mock('../useYearWinner', () => {
  return jest.fn(() => ({ data: mock }));
});

jest.mock('usehooks-ts', () => {
  return {
    useDebounce: jest.fn((value) => value),
  };
});

describe('testing YearWinnerTable page', () => {
  beforeEach(() => {
    render(
      <YearWinnerTable />
    );
  });

  it('should render columns', () => {
    screen.getByText('ID');
    screen.getByText('Year');
    screen.getByText('Title');
  });

  it('should render items', () => {
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody!.querySelectorAll('tr');
    mock.forEach((item, index) => {
      const cells = rows[index].querySelectorAll('td');
      expect(cells[0].textContent).toBe(item.id.toString());
      expect(cells[1].textContent).toBe(item.year.toString());
      expect(cells[2].textContent).toBe(item.title.toString());
    });
  });

  it('should search work', () => {
    const useYearWinnerSpy = jest.spyOn(useYearWinner, 'default');

    const searchField = screen.getByPlaceholderText('Search by year');
    const searchButton = screen.getByTestId('search-button');
    fireEvent.change(searchField, { target: { value: '1990' } });
    fireEvent.click(searchButton);

    expect(useYearWinnerSpy).toHaveBeenLastCalledWith('1990');
  });
});
