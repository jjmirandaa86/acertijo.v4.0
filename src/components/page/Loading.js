import { useContext } from "react";
import { Spinner, Image } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";

const Loading = () => {
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);
	return (
		<div className="align-items-center justify-content-center text-center not-found-container">
			<br></br>
			<br></br>
			<br></br>
			<div>
				{" "}
				<Spinner
					animation="grow"
					variant={theme === "light" ? "warning" : "light"}
				/>
				<Spinner
					animation="grow"
					variant={theme === "light" ? "warning" : "light"}
				/>
				<Spinner
					animation="grow"
					variant={theme === "light" ? "warning" : "light"}
				/>
			</div>
			<div>
				<Image
					width={70}
					height={100}
					variant="top"
					alt={texts.page_loading_img_alt}
					src={"./assets/svg/programingKeys.svg"}
				/>
			</div>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
};

export default Loading;
