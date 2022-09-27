import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand as={NavLink} to="/" href="#home">Ramona Customs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/categoria/remeras">remeras</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/especiales">especiales</Nav.Link>
            <Nav.Link as={NavLink} to="/categoria/cuidado">cuidado</Nav.Link>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TikTok
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Whatssapp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Hacenos tu consulta
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;