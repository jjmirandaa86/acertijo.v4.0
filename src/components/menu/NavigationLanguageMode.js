import React, { useContext } from "react";
import DarkMode from "../layout/Darkmode";
import Language from "../layout/Language";

const NavigationLanguageMode = () => {
	return (
		<div style={{ float: "left", display: "flex" }}>
			<DarkMode height={25} width={25} />
			<Language height={20} width={20} />
		</div>
	);
};

export default NavigationLanguageMode;
