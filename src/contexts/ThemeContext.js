import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = "light";

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(initialTheme);

  const handleChangeTheme = () => {
    if (theme === "light") { setTheme("dark"); }
    else { setTheme("light"); }
  };

  const data = { theme, setTheme, handleChangeTheme };

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;