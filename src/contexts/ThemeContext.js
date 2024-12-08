import { createContext, useState } from "react";
const ThemeContext = createContext();

const initialTheme = "dark";
const backgroundDark =
	"linear-gradient(163deg, rgba(43,48,53,1) 0%, rgba(28,140,180,1) 37%, rgba(255,193,7,1) 76%, rgba(255,255,255,1) 100%)";
const backgroundLight =
	"linear-gradient(163deg, rgba(255,255,255,1) 0%, rgba(28,140,180,1) 37%, rgba(255,193,7,1) 76%, rgba(43,48,53,1) 100%)";

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(initialTheme);
	const [background, setBackground] = useState(backgroundDark);

	const handleChangeTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			setBackground(backgroundDark);
		} else {
			setTheme("light");
			setBackground(backgroundLight);
		}
	};

	const data = {
		theme,
		setTheme,
		handleChangeTheme,
		background,
	};

	return (
		<>
			<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
		</>
	);
};

export { ThemeProvider };
export default ThemeContext;
