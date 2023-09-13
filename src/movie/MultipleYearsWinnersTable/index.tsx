'use client'

import { Table } from 'react-bootstrap';
import useMultipleYearsWinner from '../useMultipleYearsWinner';
import { IYearWinner } from '../types';

export default function YearsWinnersTable() {
  const {
    data: { years = [] } = {},
  } = useMultipleYearsWinner();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>Year</td>
          <td>Win Count</td>
        </tr>
      </thead>
      <tbody>
        {years.map((year: IYearWinner) => (
          <tr key={year.year}>
            <td>{year.year}</td>
            <td>{year.winnerCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};
