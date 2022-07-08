import React from 'react';

const Logo = ({ darkMode, px, py }) => {

    return (
        <>
            {darkMode.status ?
                <img src="./image/acertijo_logo_blanco.png"
                    width={px}
                    height={py}
                    className="App-logo"
                    alt="logo" />
                :
                <img src="./image/acertijo_logo.png"
                    width={px}
                    height={py}
                    className="App-logo"
                    alt="logo" />
            }
        </>
    );
};

export default Logo;