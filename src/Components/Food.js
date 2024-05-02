import {
    Container, Card,
    Button
} from "react-bootstrap";
import NavBar from "./Navbar.js";
import Footer from "./Footer.js";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Food(){
    return(
        <>
            <NavBar />
            <div className="bg-home"></div>
            <Container className="w-100 mt-3 mb-5">
                <hr className="hr" />
                    <Container className="d-flex justify-content-center">
                        <h1 className="title-text">
                            OUR DONUTS
                        </h1>
                    </Container>
                <hr className="hr" />
            </Container>
            <Container className="mb-5 d-flex flex-wrap justify-content-evenly">
                <Card className="m-3 card-register w-25">
                    <Card.Img 
                        src="pic-home.png" 
                        alt="" 
                        height={200}
                        width={200}
                    />
                    <Card.Footer className="border-0">
                        <Button className="w-100 rounded-pill mt-2 fw-bold login-button">
                            <FaShoppingCart /> &nbsp;
                            Donut ni Marc &nbsp;&nbsp;&nbsp;&nbsp;
                            $2.19
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
            <Footer />
        </>
    );
}

export default Food;