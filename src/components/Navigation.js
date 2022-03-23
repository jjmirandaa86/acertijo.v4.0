import React, { useState } from 'react'
import Logo from './Logo'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import Darkmode from './Darkmode';
import Language from './Language';

const Navigation = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar
            expand={false}
            variant={props.vdarkMode}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <Logo px="90" py="90" />
                    {" "}
                    <b>ACERTIJO</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={show} onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => { props.setShowWindow("H"); handleClose(); }}>Home</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("A"); handleClose(); }}>About</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("C"); handleClose(); }}>CV</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("O"); handleClose(); }}>Contact</Nav.Link>
                            <Nav.Link>
                                <Darkmode
                                    darkMode={props.darkMode}
                                    setDarkMode={props.setDarkMode}
                                    imgh={45}
                                    imgw={45}
                                />
                                <Language language={props.language}
                                    setLanguage={props.setLanguage}
                                    imgh={25}
                                    imgw={25} />
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation