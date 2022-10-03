import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBody">
      <Navbar bg="dark" expand="lg" className="nav">
      <Container className="navContainer navletters">
        <img src="https://i.ibb.co/LZ5FQ8j/logo-modified.png" alt="" className="logo" />
        <Navbar.Brand as={NavLink} to="/" href="#home" style={{color: "white", fontFamily: "Roboto Condensed, sans-serif"}}>
          Ramona Customs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link as={NavLink} to="/categoria/remeras" style={{color: "white", fontFamily: "Roboto Condensed, sans-serif"}}>
              Remeras
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/especiales" style={{color: "white", fontFamily: "Roboto Condensed, sans-serif"}}>
              Especiales
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/cuidado" style={{color: "white", fontFamily: "Roboto Condensed, sans-serif"}}>
              Barbijos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
