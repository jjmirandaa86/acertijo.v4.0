import React from 'react'
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Jefferson Miranda A.</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Software developer
                    </Card.Subtitle>
                    <Card.Text>
                        +593-993277375
                        <div class="vr"></div>
                        <a href="mailto:jmiranda@acertijo.dev">jmiranda@acertijo.dev</a>
                        <div class="vr"></div>
                        <a href=' https://www.linkedin.com/in/jjmirandaa86/'>
                            https://www.linkedin.com/in/jjmirandaa86/
                        </a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Header