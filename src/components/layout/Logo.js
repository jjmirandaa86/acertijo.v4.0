import React, { useContext } from 'react';
import ThemeContext from "../../contexts/ThemeContext";

const Logo = ({ px, py }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <img src={theme === "dark" ?
                "./image/logo_white.png" :
                "./image/logo_dark.png"}
                width={px}
                height={py}
                className="App-logo"
                alt="logo" />
        </>
    );
};

export default Logo;