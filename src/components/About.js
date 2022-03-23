import React from 'react'
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";
import Socialnetworks from "./Socialnetworks"

const About = (props) => {
    return (
        <>
            <Card bg={props.vdarkMode === 'dark' ? 'custom' : props.vdarkMode}
                text={props.vdarkMode === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                    <Card.Title>Resume</Card.Title>
                    <Row>
                        <Col lg="3" md="3" xs="12">
                            <Image
                                variant="top"
                                roundedCircle
                                src="./image/foto-frente-mac.jpg"
                                height={"150"}
                                width={"150"} />
                        </Col>
                        <Col lg="9" md="9" xs="12">
                            I'm full stack software developer living in Calgary, Canada.
                            I’m the maintainer of Create React App and a member of the Node.js team.
                            I also work on a number of other open source projects, mostly in the JavaScript and TypeScript ecosystems.
                            More about me.
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card.Body>
                <p>
                    I’ve been building software professionally for over 15 years.
                    I have a B.Sc. in Computer Science from the University of Calgary and
                    I’ve built web, mobile, desktop and server applications in a variety
                    of languages. I’m currently an engineering lead and DX team lead at
                    Neo Financial (we’re hiring).
                </p>
                <p>
                    If you’re interested in my open source work take a look at my GitHub
                    profile or follow me on Twitter. If you’re interested in my professional
                    work you can connect with me on LinkedIn.
                </p>
                <p>
                    Want to know what I’m working on this month? Take a look at my list of
                    current projects. Want to know what equipment I use? Take a look at
                    my list of gear.
                </p>
                <p>
                    <dt>Speaking</dt>
                    I’ve spoken at conferences and meetups as well as appeared on podcasts and
                    livestreams. Take a look at my past talks and if you’re interested in having
                    me speak or be a guest, please get in touch.
                </p>
            </Card.Body>
            <Card.Body>
                <Row>
                    <Col>
                        <p>
                            <dt>About This Site</dt>
                            This site is built with Next.js and Tailwind and hosted on Vercel.
                            The icons are from Simple Icons and Heroicons.
                            The source code is available on GitHub under the MIT license.
                        </p>
                    </Col>
                    <Col>
                        <p>
                            <dt>Get In Touch</dt>
                            Got something to say? Want to take over the world? Send me a message
                            on Twitter or, if you’re not into the whole brevity thing, send me an email.
                        </p>
                    </Col>
                </Row>
            </Card.Body>
        </>
    )
}

export default About