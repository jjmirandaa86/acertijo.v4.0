import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Button, Container } from 'react-bootstrap';
import Body from './Body';
import Footer from './Footer';
import Navigationbar from './Navigationbar';

const Main = () => {
    const [showWindow, setShowWindow] = useState("H");
    const [language, setLanguage] = useState({ key: "EN", urlImage: "EN.svg" });
    const [darkMode, setDarkMode] = useState({ status: false, keyName: "light" });

    const handleChangeMode = () => {
        darkMode.status === true
            ? setDarkMode({ status: false, keyName: "light" })
            : setDarkMode({ status: true, keyName: "dark" });
    };

    const handleChangeLanguage = () => {
        if (language.key === "ES") {
            setLanguage({ key: "EN", urlImage: "EN.svg" });
            return;
        };
        if (language.key === "EN") {
            setLanguage({ key: "ES", urlImage: "ES.svg" });
            return;
        };
    };

    return (
        <Container>
            <div className={"bg-" + darkMode.keyName}>
                <Navigation
                    darkMode={darkMode}
                    handleChangeMode={handleChangeMode}
                    language={language}
                    handleChangeLanguage={handleChangeLanguage}
                    setShowWindow={setShowWindow}
                />
                <Navigationbar
                    darkMode={darkMode}
                    handleChangeMode={handleChangeMode}
                    language={language}
                    handleChangeLanguage={handleChangeLanguage} />

                <Container >
                    <Body
                        showWindow={showWindow}
                        darkMode={darkMode}
                        language={language} />
                </Container>
                <Footer
                    darkMode={darkMode}
                />
            </div>
        </Container>
    );
};

export default Main;