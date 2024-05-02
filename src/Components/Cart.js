import React, { useState } from "react";
import { Container, Table, Button, Form, Image, Modal, Row, Col } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function Cart(props) {
    const [modal, setModal] = useState(false);

    function handleOpenModal() {
        setModal(true);
    }

    function handleCloseModal() {
        setModal(false);
    }

    return (
        <>
            <NavBar />
            <Container className="w-100 mt-4 mb-5">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center mb-2">
                <h1 className="title-text">My Cart</h1>
            </Container>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Check aria-label="option 1" />
                            </td>
                            <td>
                                <Image
                                    src="pic-home.png"
                                    height={50}
                                    width={70}
                                    alt=""
                                />
                            </td>
                            <td>Donut ni Marc</td>
                            <td>$2.19</td>
                            <td>1</td>
                            <td>$2.19</td>
                            <td>
                                <Button
                                    variant="primary"
                                    className="me-2 edit-button"
                                    onClick={handleOpenModal}
                                >
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Container className="d-flex justify-content-end">
                    <Button className="fw-bold login-button">Check Out</Button>
                </Container>
            </Container>
            <Container className="w-100 mt-5">
                <hr className="hr" />
            </Container>
            <Footer />

            <Modal
                {...props}
                show={modal}
                onHide={handleCloseModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Image
                                src="pic-home.png"
                                height={200}
                                width={400}
                                alt=""
                            />
                        </Col>
                        <Col>
                            <p>
                                Item : Donut ni Marc<br />
                                Price : $2.19
                            </p>
                            <input type="number" placeholder="Quantity" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="fw-bold login-button w-25">Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;
