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

    const nameImage = (theme === "light")
        ? "perfil-gris50"
        : "perfil-gris100";

    return (
        <>
            <Card bg={theme.toLowerCase()}
                text={theme === 'light' ? 'dark' : 'white'}>
                <Card.Body>
                    <Image
                        roundedCircle
                        variant="top"
                        alt={texts.page_home_img_alt}
                        src={nameImage + "_800w.jpeg"}
                        srcset={`${nameImage}_200w.jpeg 200w, 
                        ${nameImage}_400w.jpeg 400w, 
                        ${nameImage}_600w.jpeg 600w, 
                        ${nameImage}_800w.jpeg 800w`}
                        sizes="(max-width: 576px) 200px, 
                            (max-width: 768px) 400px, 
                            (max-width: 600px) 992px, 800px"
                    />


                    <Image
                        roundedCircle
                        variant="top"
                        alt={texts.page_home_img_alt}
                        src={"elva-fairy-200w.jpg"}
                        srcset={`elva-fairy-200w.jpg 200w, 
                                elva-fairy-400w.jpg 400w, 
                                elva-fairy-600w.jpg 600w, 
                                elva-fairy-800w.jpg 800w`}
                        sizes="(max-width: 576px) 200px, 
                                (max-width: 768px) 400px, 
                                (max-width: 600px) 600px, 800px"
                    />
                    <Card.Title>
                        <div style={styles}>
                            <h1><strong>{texts.page_home_title} </strong></h1>
                            <h2><strong>{texts.page_home_subtitle} </strong></h2>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <h3>
                            <strong>{texts.page_home_body1} {" "} </strong>
                            {" "}{texts.page_home_body2}
                            {" "}{texts.page_home_body3}
                        </h3>
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
