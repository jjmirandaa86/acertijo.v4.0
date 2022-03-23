import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import { Button, Container } from 'react-bootstrap';
import Body from './Body';
import Footer from './Footer';
import Navigationbar from './Navigationbar';

const Main = () => {
    const [showWindow, setShowWindow] = useState("H");
    const [language, setLanguage] = useState("ES");
    const [darkMode, setDarkMode] = useState(false);
    const [vdarkMode, setVdarkMode] = useState(null);

    useEffect(() => {
        (darkMode === true) ? setVdarkMode("dark") : setVdarkMode("light")
    }, [darkMode])

    return (
        <div className={"bg-" + vdarkMode}>
            <Navigation
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                vdarkMode={vdarkMode}
                setShowWindow={setShowWindow}
                language={language}
                setLanguage={setLanguage} />

            <Navigationbar darkMode={darkMode}
                setDarkMode={setDarkMode}
                language={language}
                setLanguage={setLanguage} />

            <Container >
                <Body showWindow={showWindow}
                    darkMode={darkMode}
                    vdarkMode={vdarkMode} />
            </Container>
            <Footer />
        </div>
    )
}

export default Main