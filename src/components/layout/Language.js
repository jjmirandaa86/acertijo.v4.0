import React, { useContext } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

const Language = ({ height, width }) => {

    const { language, handleLanguage, listLanguage, texts } = useContext(LanguageContext);

    const { id, name, flag } = listLanguage.find(e => e.id === language);

    return (
        <>
            <img
                src={"./image/" + flag}
                height={height}
                width={width}
                style={{
                    alignItems: "center",
                    justifyContent: "center"
                }}
                alt={texts.flag_img_alt + name}
                onClick={() => handleLanguage()}
            />
        </>
    );
};

export default Language;