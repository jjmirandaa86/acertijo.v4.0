import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import SocialNetworks from "../layout/Socialnetworks";
import Imagenes from "../layout/Imagenes";

const Home = () => {
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
						<div style={styles}>
							<h1>
								<strong>{texts.page_home_title} </strong>
							</h1>
							<h2>
								<strong>{texts.page_home_subtitle} </strong>
							</h2>
						</div>
					</Card.Title>
					<h3>
						<Card.Text>
							<strong>{texts.page_home_body1}</strong> {texts.page_home_body2}{" "}
							{texts.page_home_body3}
						</Card.Text>
						<SocialNetworks interactive={true} />
					</h3>
				</Card.Body>
			</Card>
		</>
	);
};

export default Home;
