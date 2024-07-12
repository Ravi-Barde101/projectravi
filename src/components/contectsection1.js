import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./contentsection1.css";

function ContentSection1(){
return(
 <Container  className="content">
  <Row className="content-section">
    <Col lg={5} md={6} sm={12} xs={12} className="contentsection-left">
      <p className="para1">Lorem Ipsum Is Simply</p>
      <p className="para2">Dummy text of Printing and typetexting</p>
      <Button variant="primary" className="but">Book Now</Button>
    </Col>
    <Col lg={7} md={6} sm={12} xs={12} className="contentsection-right">
      <img src="https://images.news18.com/ibnlive/uploads/2024/04/virat-kohli-glenn-maxwell-t20-world-cup-2024-04-15ea3f9519a4b70fbec554108e28f931.jpg?impolicy=website&width=640&height=480"></img>
    </Col>
  </Row>
 </Container>
);
}
export default ContentSection1;
