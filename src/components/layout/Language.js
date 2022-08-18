import React, { useContext } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

const Language = ({ imgh, imgw }) => {

    const { language, handleLanguage, listLanguage } = useContext(LanguageContext);

    const { id, name, flag } = listLanguage.find(e => e.id === language);

    return (
        <>
            <img
                src={"./image/" + flag}
                height={imgh}
                width={imgw}
                style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
                alt={name}
                onClick={() => handleLanguage()}
            />
        </>
    );
};

export default Language;