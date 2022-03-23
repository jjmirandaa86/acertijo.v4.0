import React from 'react'
import { Card, Alert, Row, Col, ListGroup, Container, Image, Badge, Nav } from 'react-bootstrap';
import Logo from './Logo';
import Socialnetworks from './Socialnetworks';

const Footer = () => {
    return (
        <div className="card-footer">
            <Row>
                <Col lg md="4" xs="12">
                    <Logo px="130" py="130" />

                </Col>
                <Col lg md="4" xs="12">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home">About</Nav.Link>
                        <Nav.Link href="/home">Cv</Nav.Link>

                    </Nav>
                </Col>
                <Col lg md="4" xs="12">
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Contact</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Socialnetworks />
                </Col>
            </Row>
            <Card.Body>
                © 2022 <cite title="Source Title">Jefferson Miranda</cite>. All Rights Reserved.
            </Card.Body>
        </div>
    )
}

export default Footer