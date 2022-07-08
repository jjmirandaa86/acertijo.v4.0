import React from 'react';
import { Image } from 'react-bootstrap';

const Darkmode = ({ darkMode, handleChangeMode, imgh, imgw }) => {
    return (
        <>
            <a onClick={() => {
                handleChangeMode();
            }}>
                {(darkMode.status === true) ?
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