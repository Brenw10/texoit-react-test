'use client'

import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary px-3" data-bs-theme="dark" data-testid='header'>
      <Navbar.Brand href="/">Frontend React Test</Navbar.Brand>
    </Navbar>
  )
}