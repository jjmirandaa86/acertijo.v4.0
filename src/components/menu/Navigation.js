import React, { useContext, useState } from 'react';
import Logo from '../layout/Logo';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import Navigationbar from "./Navigationbar";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

const Navigation = ({ darkMode,
    handleChangeMode,
    setShowWindow
}) => {

    const { theme } = useContext(ThemeContext);
    const { texts } = useContext(LanguageContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar
            expand={false}
            variant={theme}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <Logo
                        darkMode={theme}
                        px="230"
                        py="60" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    show={show} onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">{texts.slidebar_menu_title}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => { setShowWindow("H"); handleClose(); }}>{texts.slidebar_home_title} </Nav.Link>
                            {/*
                            <Nav.Link onClick={() => { props.setShowWindow("A"); handleClose(); }}>About</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("C"); handleClose(); }}>CV</Nav.Link>
                            <Nav.Link onClick={() => { props.setShowWindow("O"); handleClose(); }}>Contact</Nav.Link>
                          */}
                            <Nav.Link>
                                <Navigationbar
                                    handleChangeMode={handleChangeMode} />
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Navigation;