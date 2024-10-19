import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Carousel, Image } from "react-bootstrap";

const Imagenes = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Carousel data-bs-theme={theme === "light" ? "dark" : "white"}>
				<Carousel.Item interval={3000}>
					<img
						width={300}
						src="assets/ima/developer-main.png"
						alt="Jefferson Miranda logo, Developer Full Stack"
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Image
						width={300}
						src="assets/ima/photos/jeff-happy-light.jpg"
						alt="Jefferson Miranda logo, Developer Full Stack"
						roundedCircle
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Image
						width={300}
						src="assets/ima/photos/foto-frente-mac.png"
						alt="Jefferson Miranda logo, Developer Full Stack"
						roundedCircle
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Imagenes;
