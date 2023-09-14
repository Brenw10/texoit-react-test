'use client'

import { Form, Button, Table } from 'react-bootstrap';
import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import useYearWinner from '../useYearWinner';
import { IMovie } from '../types';

export default function YearWinnerTable() {
  const [searchField, setSearchField] = useState('');
  const [search, setSearch] = useState('');
  const {
    data: movies = [],
  } = useYearWinner(search);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchField);
  };

  return (
    <div>
      <form className='d-flex flex-row gap-2 mb-3' onSubmit={onSearch}>
        <Form.Control
          type="number"
          placeholder="Search by year"
          onChange={(e) => setSearchField(e.target.value)}
          value={searchField}
        />
        <Button type='submit' data-testid='search-button'>
          <Search />
        </Button>
      </form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Year</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: IMovie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.year}</td>
              <td>{movie.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
