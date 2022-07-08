import React from 'react';
import { Card, Image, Container } from "react-bootstrap";
import Socialnetworks from './Socialnetworks';

const Home = ({ darkMode, languageKey }) => {

    const styles = {
        margin: "1rem auto",
    };

    return (
        <>
            <Card bg={darkMode.keyName.toLowerCase()}
                text={darkMode.keyName === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                    <Image
                        variant="top"
                        roundedCircle
                        src={darkMode.status === false
                            ? "./image/perfil-gris50.jpeg"
                            : "./image/perfil-gris100.jpeg"}
                        height={"300"}
                        width={"300"} />
                    <Card.Title>
                        <div style={styles}>
                            <h1><strong>Jefferson Miranda A.</strong></h1>
                            <h2><strong>Software developer</strong></h2>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Container>
                            <h3>
                                I'm <strong>full stack software developer</strong>  living in Guayaquil, Ecuador.
                                I'm the maintainer of Create React App and a member of the Node.js team.
                                I also work on a number of other open source projects, mostly in the JavaScript ecosystems.
                                More about me.
                            </h3>
                        </Container>
                        <div>
                            <Socialnetworks />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home;
