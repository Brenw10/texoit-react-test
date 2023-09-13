'use client'

import { Table } from 'react-bootstrap';
import useStudios from '../useStudios';
import { IStudios } from '../types';

export default function TopStudiosTable() {
  const {
    data: { studios = [] } = {},
  } = useStudios();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>Name</td>
          <td>Win Count</td>
        </tr>
      </thead>
      <tbody>
        {studios.slice(0, 3).map((studio: IStudios) => (
          <tr key={studio.name}>
            <td>{studio.name}</td>
            <td>{studio.winCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
