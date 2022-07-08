import React from 'react';
import { Image } from 'react-bootstrap';

const Language = ({ language, handleChangeLanguage, imgh, imgw }) => {

    return (
        <>
            <a onClick={() => handleChangeLanguage()}>
                <Image
                    src={"./image/" + language.urlImage}
                    style={{
                        height: imgh,
                        width: imgw,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                />
            </a>
        </>
    );
};

export default Language;