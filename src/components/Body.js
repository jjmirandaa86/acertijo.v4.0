import Cv from './Cv';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Body = ({ showWindow, darkMode, language }) => {

    return (
        <>
            {showWindow === "H" && <Home darkMode={darkMode} languageKey={language.key} />}
            {showWindow === "A" && <About darkModeStatus={darkMode.status} languageKey={language.key} />}
            {showWindow === "C" && <Cv darkModeStatus={darkMode.status} languageKey={language.key} />}
            {showWindow === "O" && <Contact darkModeStatus={darkMode.status} languageKey={language.key} />}
        </>
    );
};

export default Body;