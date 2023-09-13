'use client'

import { Table } from 'react-bootstrap';
import useMinMaxWinInterval from '../useMinMaxWinInterval';

export default function MinMaxWinIntervalTable() {
  const {
    data: { max = [], min = [] } = {}
  } = useMinMaxWinInterval();

  return (
    <>
      <h3 className='h6'>Maximum</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Producer</td>
            <td>Interval</td>
            <td>Previous Year</td>
            <td>Following Year</td>
          </tr>
        </thead>
        <tbody>
          {max.length > 0 && (
            <tr>
              <td>{max[0].producer}</td>
              <td>{max[0].interval}</td>
              <td>{max[0].previousWin}</td>
              <td>{max[0].followingWin}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <h3 className='h6'>Minimum</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Producer</td>
            <td>Interval</td>
            <td>Previous Year</td>
            <td>Following Year</td>
          </tr>
        </thead>
        <tbody>
          {min.length > 0 && (
            <tr>
              <td>{min[0].producer}</td>
              <td>{min[0].interval}</td>
              <td>{min[0].previousWin}</td>
              <td>{min[0].followingWin}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
