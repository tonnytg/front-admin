import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../Logo"
import '../../App.css';

export default function NavBar () {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Brand href="#"><Logo/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Programação</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">DevOps</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" disabled>
                                    SoftSkills (Em breve)
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">Sobre</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link(Em breve)
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}