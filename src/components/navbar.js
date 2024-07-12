

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";


function NavbarMenu(){
  return(
 <>
 <Container  className="Navbar-header">
  <Row className="Navbar-menu">
    <Col className="menu-left"> 
    <Nav>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">Help</Nav.Link>
      </Nav.Item>
    </Nav> 
    </Col>

  </Row>
 </Container>
 </>
  );
}
export default NavbarMenu;