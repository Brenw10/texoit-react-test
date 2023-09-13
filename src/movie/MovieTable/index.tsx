'use client'

import { Table } from 'react-bootstrap';
import useMovies from '../useMovies';
import { IMovie } from '../types';

export default function MovieTable() {
  const {
    data: { content = [] } = {},
  } = useMovies({ page: 0, size: 15 });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Title</th>
          <th>Winner?</th>
        </tr>
      </thead>
      <tbody>
        {content.map((movie: IMovie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.year}</td>
            <td>{movie.title}</td>
            <td>{movie.winner ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
};
