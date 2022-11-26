import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

const DarkMode = ({ height, width }) => {

  const {
    theme,
    handleChangeTheme
  } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      <a onClick={() => {
        handleChangeTheme();
      }}>
        {(theme === "dark") ?
          <Image
            src={"./image/sunLight.svg"}
            alt={texts.language_img_dark_alt}
            style={{
              height: height,
              width: width,
              alignItems: "center",
              justifyContent: "center",
            }}
            href=""
          /> :
          <Image
            src={"./image/sunDark.svg"}
            alt={texts.language_img_light_alt}
            style={{
              height: height,
              width: width,
              alignItems: "center",
              justifyContent: "center",
            }}
            href=""
          />}
      </a>
    </>
  );
};

export default DarkMode;