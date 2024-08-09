import { createContext, useState } from "react";
import { translations } from "../json/translations";

const LanguageContext = createContext();

const initialListLanguage = [
	{ id: "EN", name: "English", flag: "EN.svg" },
	{ id: "ES", name: "Español", flag: "ES.svg" },
];

const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("EN");
	const [texts, setTexts] = useState(translations[language]);
	const [listLanguage, setListLanguage] = useState(initialListLanguage);

	const handleLanguage = () => {
		if (language === "EN") {
			setLanguage("ES");
			setTexts(translations["ES"]);
		} else {
			setLanguage("EN");
			setTexts(translations["EN"]);
		}
	};

	const data = { language, handleLanguage, listLanguage, texts };

	return (
		<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
	);
};

export { LanguageProvider };

export default LanguageContext;
