import React, { useContext } from "react";
import { Card, Image, Col, Row, Container } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import SocialNetworks from "../layout/Socialnetworks";
import Imagenes from "../layout/Imagenes";

const Home = ({ setShowWindow }) => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const styles = {
		margin: "1rem auto",
	};

	return (
		<>
			<Card bg={theme.toLowerCase()} text={theme === "light" ? "dark" : "white"}>
				<Card.Body>
					<Imagenes />
					<Card.Title>
						<h1>
							<strong>{texts.page_home_title} </strong>
						</h1>
						<h2>
							<strong>{texts.page_home_subtitle} </strong>
						</h2>
					</Card.Title>
					<Card.Text>
						<h3>
							<strong>{texts.page_home_body1}</strong> {texts.page_home_body2}{" "}
							<a
								target="_blank"
								href={"/assets/pdf/CV-Jefferson Miranda.pdf"}
								rel="image"
							>
								{texts.page_home_body3}{" "}
								<Image
									src={"./assets/png/curriculum-vitae.png"}
									height={"40"}
									width={"40"}
									//alt={el.alt}
								/>
							</a>
						</h3>
					</Card.Text>
					<SocialNetworks interactive={true} />
				</Card.Body>
			</Card>
		</>
	);
};

export default Home;
