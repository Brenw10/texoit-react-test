'use client'

import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './style.module.css';
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname();

  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary h-100 align-items-start ${styles.navbar}`}
      data-bs-theme="light"
      data-testid='sidebar'
    >
      <Container>
        <Nav className={`flex-column ${styles.nav}`} activeKey={pathname}>
          <Nav.Link eventKey='/' href="/" color='blue'>Dashboard</Nav.Link>
          <Nav.Link eventKey='/movies' href="/movies">List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}