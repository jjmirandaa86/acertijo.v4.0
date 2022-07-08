import React, { useState } from 'react';
import Logo from './Logo';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import Navigationbar from "./Navigationbar";

const Navigation = ({ darkMode,
    handleChangeMode,
    language,
    handleChangeLanguage,
    setShowWindow
}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar
            expand={false}
            variant={darkMode.keyName}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <Logo
                        darkMode={darkMode}
                        px="270"
                        py="70" />
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
                            <Nav.Link onClick={() => { setShowWindow("H"); handleClose(); }}>Home</Nav.Link>
                            {/*
                            <Nav.Link onClick={() => { props.setShowWindow("A"); handleClose(); }}>About</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("C"); handleClose(); }}>CV</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("O"); handleClose(); }}>Contact</Nav.Link>
                          */}
                            <Nav.Link>
                                <Navigationbar darkMode={darkMode}
                                    handleChangeMode={handleChangeMode}
                                    language={language}
                                    handleChangeLanguage={handleChangeLanguage} />
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Navigation;