import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header({ cartItems }) {
  let sum = cartItems
    .map((item) => item.quantity)
    .reduce((total, item) => total + item, 0);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <h1 className="bi bi-house"></h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/usermanager">
                <h1 className="bi bi-person-gear"></h1>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <h1 className="bi bi-cart">
                  <span className="badge badge-warning" id="lblCartCount">
                    {sum}
                  </span>
                </h1>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
