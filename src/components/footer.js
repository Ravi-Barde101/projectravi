import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./footer.css";
function Footer(){
    return(
        <>
        <Container className="footer-section">
            <Row className="footer-content">
                <Col lg={3} md={6} sm={6} xs={12} className="footer-para">
                  <h2>BRUmmm</h2>
                  <p>Lorem Ipsum is simply Dummy text of the Printing and typesetting industry. Lorem Ipsum has Dummy text of the Printing and typesetting industry. Lorem Ipsum has</p>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} className="footer-para">
                  <h2>About Brummm</h2>
                  <p>Home</p>
                  <p>about</p>
                  <p>Services</p>
                  <p>FAQs</p>
                  <p>Contact</p>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} className="footer-para">
                  <h2>Customer Service</h2>
                  <p>+91-8909910910,8771000010</p>
                  <p>service@brumm.in</p>
                  <p>help@brumm.in</p>
                </Col>
                <Col lg={3} md={6} sm={6} xs={12} className="footer-para">
                  <h2>Social Media</h2>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Footer;