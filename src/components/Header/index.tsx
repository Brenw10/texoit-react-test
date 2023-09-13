'use client'

import { Navbar, Container } from "react-bootstrap";

export default function GlobalHeader() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Frontend React Test</Navbar.Brand>
      </Container>
    </Navbar>
  )
}