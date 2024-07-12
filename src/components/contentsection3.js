import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./contentsection3.css";

function ContentSection3(){
    return(
   <Container className="Content2">
     <Row className="Content2-left">
        <Col className="left"><p>Why Choose Us</p></Col>
     </Row>
     <Row className="Content2-center">
        <Col lg={6} md={6} sm={12} xs={12} className="Content2-mid1"> 
            <p className="para1">24/7 Services stations</p>
            <p className="para2">Dummy text of the Printing and typesetting industry. Lorem Ipsum has</p>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="Content2-mid2">
         <img src="https://www.hindustantimes.com/ht-img/img/2024/06/22/550x309/ANI-20240609327-0_1719026117963_1719026151133.jpg"></img>
        </Col>
     </Row>
     <Row className="Content2-right">
        <Col className="right"><p>How it works</p></Col>
     </Row>
   </Container>
    );
}
export default ContentSection3;