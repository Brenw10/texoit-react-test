import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MinMaxWinIntervalTable from '.';
import mock from './mock.json';

jest.mock('../useMinMaxWinInterval', () => {
  return jest.fn(() => ({ data: mock }));
});


describe('testing MinMaxWinIntervalTable component', () => {
  beforeEach(() => {
    render(<MinMaxWinIntervalTable />);
  });

  it('columns show be displayed', () => {
    const producers = screen.getAllByText('Producer');
    const intervals = screen.getAllByText('Interval');
    const previousYears = screen.getAllByText('Previous Year');
    const followingYears = screen.getAllByText('Following Year');

    expect(producers.length).toBe(2);
    expect(intervals.length).toBe(2);
    expect(previousYears.length).toBe(2);
    expect(followingYears.length).toBe(2);
  });

  it('should show maximum', () => {
    screen.getByText(mock.min[0].producer);
    screen.getByText(mock.min[0].previousWin);
    screen.getByText(mock.min[0].interval);
    screen.getByText(mock.min[0].followingWin);
  });

  it('should show minimum', () => {
    screen.getByText(mock.max[0].producer);
    screen.getByText(mock.max[0].previousWin);
    screen.getByText(mock.max[0].interval);
    screen.getByText(mock.max[0].followingWin);
  });
});
