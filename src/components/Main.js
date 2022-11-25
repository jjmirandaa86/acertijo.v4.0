import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from './menu/Navigation';
import NavigationBar from './menu/NavigationBar';
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
                <NavigationBar />
                <Container >
                    <Body showWindow={showWindow} />
                </Container>
                <Footer
                    setShowWindow={setShowWindow} />

            </div>
        </Container>
    );
};

export default Main;