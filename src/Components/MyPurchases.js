import React from "react";
import { Container, Table, Image } from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import "../App.css";

function MyPurchases() {
    return (
        <>
            <NavBar />
            <Container className="w-100 mt-4 mb-4">
                <hr className="hr" />
            </Container>
            <Container className="d-flex justify-content-center mb-2">
                <h1 className="title-text">My Purchase</h1>
            </Container>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container className="w-100 mt-5">
                <hr className="hr" />
            </Container>
            <Footer />
        </>
    );
}

export default MyPurchases;
