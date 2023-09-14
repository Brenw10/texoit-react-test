import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieTable from '.';
import mock from './mock.json';
import * as useMovies from '../useMovies';

jest.mock('../useMovies', () => {
  return jest.fn(() => ({ data: mock }));
});

jest.mock('usehooks-ts', () => {
  return {
    useDebounce: jest.fn((value) => value),
  };
});

describe('testing movie table component', () => {
  beforeEach(() => {
    render(<MovieTable />);
  });

  it('should render columns', () => {
    screen.getByText('ID');
    screen.getByText('Year');
    screen.getByText('Title');
    screen.getByText('Winner?');
  });

  it('should render data', () => {
    const table = screen.getByRole('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody!.querySelectorAll('tr');
    mock.content.forEach((movie, index) => {
      const cells = rows[index].querySelectorAll('td');
      expect(cells[0].textContent).toBe(movie.id.toString());
      expect(cells[1].textContent).toBe(movie.year.toString());
      expect(cells[2].textContent).toBe(movie.title.toString());
      expect(cells[3].textContent).toBe(movie.winner ? 'Yes' : 'No');
    });
  });

  it('should filters work', () => {
    const year = '1990';
    const winner = 'true';
    const useMoviesSpy = jest.spyOn(useMovies, 'default');

    const yearFilter = screen.getByPlaceholderText('Filter by year');
    fireEvent.change(yearFilter, { target: { value: year } });

    expect(useMoviesSpy).toHaveBeenLastCalledWith({ page: 0, size: 15, year });

    const yesNoFilter = screen.getByPlaceholderText('Yes/No');
    fireEvent.change(yesNoFilter, { target: { value: winner } });

    expect(useMoviesSpy).toHaveBeenLastCalledWith({ page: 0, size: 15, year, winner });

    const nextPage = screen.getByText('Next');
    fireEvent.click(nextPage);

    expect(useMoviesSpy).toHaveBeenLastCalledWith({ page: 1, size: 15, year, winner });
  });
});
