import React, { useContext } from 'react';
import { Card, Row, Col, Nav } from 'react-bootstrap';
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import SocialNetworks from './SocialNetworks';

const Footer = ({ setShowWindow }) => {

    const { texts } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Card
                bg={theme.toLowerCase()}
                text={theme === 'light' ? 'dark' : 'white'}
                border="">
                <Card.Body>
                    <Row>
                        <Col lg md="2" xs="12">
                        </Col>
                        <Col lg md="3" xs="12">
                            <Nav className="flex-column">
                                <Nav.Link
                                    onClick={() => { setShowWindow("H"); }}>
                                    {texts.slideBar_home_title}
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => { setShowWindow("O"); }}>
                                    {texts.slideBar_contact_title}
                                </Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg md="3" xs="12">
                            <Nav className="flex-column">
                                {/*<Nav.Link href="/home">Cv</Nav.Link>*/}
                                {/*<Nav.Link href="/home">Contact</Nav.Link>*/}
                            </Nav>
                        </Col>
                        <Col lg md="4" xs="12">
                            <SocialNetworks interactive={false} />
                        </Col>
                    </Row>
                    <Card.Text bg={"dark"} text={'dark'}>
                        <cite title="Source Title">
                            {texts.footer_reserve_title}
                        </cite>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Footer;