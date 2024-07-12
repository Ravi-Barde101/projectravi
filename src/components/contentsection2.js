import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contensection2.css";

function ContenSection2(){
    return(
     <>
      <Container className="content1">
        <Row className="content-section1">
         <Col lg={3} md={3} sm={12} xs={12} className="content-card"><p>Package</p></Col>
         <Col lg={3} md={3} sm={12} xs={12} className="content-card"><p>Servicing</p></Col>
         <Col lg={3} md={3} sm={12} xs={12} className="content-card"><p>Maintenance</p></Col>
         <Col lg={3} md={3} sm={12} xs={12} className="content-card"><p>Denting/Painting</p></Col>
        </Row>
      </Container>
     </>
    );
}
export default ContenSection2;