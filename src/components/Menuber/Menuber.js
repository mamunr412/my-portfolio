import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menuber = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#2a323a" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">AAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#Home" style={{ fontSize: "20px" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#project" style={{ fontSize: "20px" }}>
                Projects
              </Nav.Link>
              <Nav.Link href="#skills" style={{ fontSize: "20px" }}>
                {" "}
                Skills
              </Nav.Link>
              <Nav.Link href="#about" style={{ fontSize: "20px" }}>
                About Me
              </Nav.Link>
              <Nav.Link href="#contact" style={{ fontSize: "20px" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menuber;
