import React, { useContext } from 'react';
import { Card, Image, Container } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import Socialnetworks from "../layout/Socialnetworks";

const Home = () => {

    const { texts } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    const styles = {
        margin: "1rem auto",
    };

    return (
        <>
            <Card bg={theme.toLowerCase()}
                text={theme === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                    <Image
                        variant="top"
                        roundedCircle
                        src={theme === "light"
                            ? "./image/perfil-gris50.jpeg"
                            : "./image/perfil-gris100.jpeg"}
                        height={"300"}
                        width={"300"} />
                    <Card.Title>
                        <div style={styles}>
                            <h1><strong>{texts.page_home_title} </strong></h1>
                            <h2><strong>{texts.page_home_subtitle} </strong></h2>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Container>
                            <h3>
                                <strong>{texts.page_home_body1}</strong>
                                {texts.page_home_body2}
                                {texts.page_home_body3}
                            </h3>
                        </Container>
                        <div>
                            <Socialnetworks interactive={true} />
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Home;
