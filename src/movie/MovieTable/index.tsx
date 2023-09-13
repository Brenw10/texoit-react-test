'use client'

import { Table } from 'react-bootstrap';
import useMovies from '../useMovies';
import { IMovie } from '../types';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useState } from 'react';

const SIZE = 15;

export default function MovieTable() {
  const [page, setPage] = useState(1);
  const {
    data: {
      content = [],
      totalElements = 0,
    } = {},
  } = useMovies({ page: page - 1, size: SIZE });

  return (
    <>
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
      <PaginationControl
        page={page}
        between={2}
        total={totalElements}
        limit={SIZE}
        changePage={setPage}
        ellipsis={1}
        last
      />
    </>
  )
};
