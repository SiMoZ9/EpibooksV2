import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import {Col, Row} from'react-bootstrap';
import Button from'react-bootstrap/Button';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-between ">
            <Container className="">
                <Navbar.Brand href="#home">Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-around">
                        <Link to={'/'}>Home</Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Navigation;