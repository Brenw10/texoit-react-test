'use client'

import { Table, Form } from 'react-bootstrap';
import useMovies, { IMoviesPayload } from '../useMovies';
import { IMovie } from '../types';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { useState } from 'react';
import styles from './style.module.css'
import { useDebounce } from '@uidotdev/usehooks';

export default function MovieTable() {
  const [filters, setFilters] = useState<IMoviesPayload>({ page: 0, size: 15 });
  const debouncedFilters = useDebounce(filters, 500);
  const {
    data: {
      content = [],
      totalElements = 0,
    } = {},
  } = useMovies(debouncedFilters);

  return (
    <>
      <Table striped bordered hover className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Year
              <Form.Control
                type="text"
                placeholder="Filter by year"
                onChange={(e) => setFilters({ ...filters, year: e.target.value, page: 0 })}
                value={filters.year || ''}
              />
            </th>
            <th>Title</th>
            <th>
              Winner?
              <Form.Select
                aria-label="Yes/No"
                placeholder='Yes/No'
                value={filters.winner}
                size='sm'
                onChange={(e) => setFilters({ ...filters, winner: e.target.value, page: 0 })}
              >
                <option value="">Yes/No</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Select>
            </th>
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
        page={filters.page + 1}
        between={2}
        total={totalElements}
        limit={filters.size}
        changePage={(page) => setFilters({ ...filters, page: page - 1 })}
        ellipsis={1}
        last
      />
    </>
  )
};
