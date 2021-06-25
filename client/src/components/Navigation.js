import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="d-flex w-100">
          <Container className="d-flex justify-content-start">
            <Navbar.Brand as={Link} to="/">
              Event List
            </Navbar.Brand>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Container>
          <Container className="d-flex justify-content-end">
            <Nav.Link as={Link} to="/addevent">
              Add Event
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
          </Container>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
