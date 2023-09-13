'use client'

import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './style.module.css';

export default function SideBar() {
  return (
    <Navbar expand="lg" className={`bg-body-tertiary h-100 align-items-start ${styles.navbar}`} data-bs-theme="light">
      <Container>
        <Nav className="me-auto flex-column">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/movies">List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}