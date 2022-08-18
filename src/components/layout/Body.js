import Cv from '../page/Cv';
import Home from '../page/Home';
import About from '../page/About';
import Contact from '../page/Contact';

const Body = ({ showWindow }) => {

    return (
        <>
            {showWindow === "H" && <Home />}
            {showWindow === "A" && <About />}
            {showWindow === "C" && <Cv />}
            {showWindow === "O" && <Contact />}
        </>
    );
};

export default Body;