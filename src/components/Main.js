import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './menu/Navigation';
import Navigationbar from './menu/Navigationbar';
import Body from './layout/Body';
import Footer from './layout/Footer';
import ThemeContext from "../contexts/ThemeContext";

const Main = () => {

    const { theme } = useContext(ThemeContext);
    const [showWindow, setShowWindow] = useState("H");

    return (
        <Container>
            <div className={"bg-" + theme}>
                <Navigation
                    setShowWindow={setShowWindow}
                />
                <Navigationbar />
                <Container >
                    <Body showWindow={showWindow} />
                </Container>
                <Footer />

            </div>
        </Container>
    );
};

export default Main;