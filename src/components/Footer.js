import React from 'react';
import { Card, Alert, Row, Col, ListGroup, Container, Image, Badge, Nav, Navbar, expand, Offcanvas } from 'react-bootstrap';
import Logo from './Logo';
import Socialnetworks from './Socialnetworks';

const Footer = ({ darkMode }) => {
    return (
        <>
            <div className="card-footer">
                <Card.Body>
                    <Row>
                        <Col lg md="2" xs="12">
                        </Col>
                        <Col lg md="3" xs="12">
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/home">About</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg md="3" xs="12">
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Cv</Nav.Link>
                                <Nav.Link href="/home">Contact</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg md="4" xs="12">
                            <Socialnetworks />
                        </Col>
                    </Row>
                    <Card.Text bg={"dark"} text={'dark'}>
                        © 2022 <cite title="Source Title">Jefferson Miranda</cite>. All Rights Reserved.
                    </Card.Text>
                </Card.Body>
            </div>
        </>
    );
};

export default Footer;