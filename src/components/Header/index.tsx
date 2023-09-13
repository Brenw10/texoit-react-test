'use client'

import { Navbar } from "react-bootstrap";

export default function GlobalHeader() {
  return (
    <Navbar className="bg-body-tertiary px-3" data-bs-theme="dark">
      <Navbar.Brand href="/">Frontend React Test</Navbar.Brand>
    </Navbar>
  )
}