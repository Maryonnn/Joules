import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import "../App.css";

function Menu() {
    return(
        <>
            <NavBar />
            <Container className="w-50 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center mt-5 mb-5">
                <Row xs={1} sm={2} md={2} className="g-4">
                    <Col>
                        <Card className="menu-card">
                            <Card.Img src="pic-home.png" alt="" />
                            <Card.Body className="d-flex justify-content-center">
                                <Button variant="danger" className="w-75 rounded-pill fw-bold">Food</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="menu-card">
                            <Card.Img src="pic-home.png" alt="" />
                            <Card.Body className="d-flex justify-content-center">
                                <Button variant="danger" className="w-75 rounded-pill fw-bold">Beverages</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="w-50 mt-3 mb-4">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default Menu;
