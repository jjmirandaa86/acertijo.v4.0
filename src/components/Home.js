import React from 'react'
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";
import Socialnetworks from './Socialnetworks';

const Home = (props) => {
    return (
        <>
            <Card bg={props.vdarkMode}
                text={props.vdarkMode === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                    <Image
                        variant="top"
                        roundedCircle
                        src={props.vdarkMode === 'light'
                            ? "./image/perfil-gris50.jpeg"
                            : "./image/perfil-gris100.jpeg"}
                        height={"300"}
                        width={"300"} />
                    <Card.Title>
                        <h1>Jefferson Miranda A.</h1>
                        <h4>Software developer</h4>
                    </Card.Title>
                    <Card.Text>
                        <Container>
                            I'm full stack software developer living in Calgary, Canada.
                            I’m the maintainer of Create React App and a member of the Node.js team.
                            I also work on a number of other open source projects, mostly in the JavaScript and TypeScript ecosystems.
                            More about me.
                        </Container>
                        <div>
                            <Socialnetworks />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home
