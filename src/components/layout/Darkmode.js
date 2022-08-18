import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import ThemeContext from "../../contexts/ThemeContext";

const Darkmode = ({ imgh, imgw }) => {

    const { theme, handleChangeTheme } = useContext(ThemeContext);

    return (
        <>
            <a onClick={() => {
                handleChangeTheme();
            }}>
                {(theme === "dark") ?
                    <Image
                        src={"./image/sunLight.svg"}
                        style={{
                            height: imgh,
                            width: imgw,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    /> :
                    <Image
                        src={"./image/sunDark.svg"}
                        style={{
                            height: imgh,
                            width: imgw,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    />}
            </a>
        </>
    );
};

export default Darkmode;