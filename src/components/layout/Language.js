import React, { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const Language = ({ height, width }) => {
	const { language, handleLanguage, listLanguage, texts } =
		useContext(LanguageContext);

	const { name, flag } = listLanguage.find((e) => e.id === language);

	return (
		<div>
			<img
				src={"./assets/svg/" + flag}
				height={height}
				width={width}
				style={{
					alignItems: "center",
					justifyContent: "center",
				}}
				alt={texts.flag_img_alt + name}
				onClick={handleLanguage}
			/>
		</div>
	);
};

export default Language;
