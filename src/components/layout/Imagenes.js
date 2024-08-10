import React from "react";
import { Carousel, Image } from "react-bootstrap";

const Imagenes = () => {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={3000}>
					<img width={300} src="assets/ima/developer-main.png" alt="First slide" />
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<Image
						width={300}
						src="assets/ima/photos/jeff-happy-light.jpg"
						alt="First slide"
						roundedCircle
					/>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<Image
						width={300}
						src="assets/ima/photos/foto-frente-mac.png"
						alt="First slide"
						roundedCircle
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default Imagenes;
