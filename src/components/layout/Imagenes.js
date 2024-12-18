import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { Carousel, Image, Row, Col } from "react-bootstrap";

const Imagenes = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Carousel data-bs-theme={theme === "light" ? "dark" : "white"}>
				<Carousel.Item interval={3000000}>
					<Row>
						<Col></Col>
						<Col style={{ padding: 0 }} xs={10}>
							<Image
								src="assets/ima/developer-main.png"
								alt="Jefferson Miranda logo, Developer Full Stack"
								rounded
								fluid
							/>
						</Col>
						<Col></Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Row>
						<Col></Col>
						<Col style={{ padding: 0 }} xs={10}>
							<Image
								src="assets/ima/photos/jeff-happy-light.jpg"
								alt="Jefferson Miranda logo, Developer Full Stack"
								roundedCircle
								fluid
							/>
						</Col>
						<Col></Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Row>
						<Col></Col>
						<Col style={{ padding: 0 }} xs={10}>
							<Image
								src="assets/ima/photos/foto-frente-mac.png"
								alt="Jefferson Miranda logo, Developer Full Stack"
								roundedCircle
								fluid
							/>
						</Col>
						<Col></Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Imagenes;
