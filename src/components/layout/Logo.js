import React, { useContext } from 'react';
import ThemeContext from "../../contexts/ThemeContext";

const Logo = ({ px, py }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <img src={theme === "dark" ?
                "./image/acertijo_logo_blanco.png" :
                "./image/acertijo_logo.png"}
                width={px}
                height={py}
                className="App-logo"
                alt="logo" />
        </>
    );
};

export default Logo;