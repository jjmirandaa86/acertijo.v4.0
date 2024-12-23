import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

const Logo = ({ px, py }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<img
				/*
				src={
					theme === "dark"
						? "./assets/png/logo_white.png"
						: "./assets/png/logo_dark.png"
				}
						*/
				src={"./assets/png/logo_white.png"}
				width={px}
				height={py}
				className="App-logo"
				alt="Acertijo logo, personal brand"
			/>
		</>
	);
};

export default Logo;
