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
						<div>
							<a
								onClick={() => {
									setShowWindow("P");
								}}
							>
								<div>
									<Image
										src="./assets/svg/portafolio.svg"
										height={10}
										width={80}
										fluid
									/>
								</div>
								<div style={{ fontSize: 12 }}>
									<i>Portafolio</i>{" "}
								</div>
							</a>
						</div>
					</Card.Title>
					<Card.Text>
						<h3>
							<strong>{texts.page_home_body1}</strong> {texts.page_home_body2}{" "}
							{texts.page_home_body3}
						</h3>
					</Card.Text>
					<SocialNetworks interactive={true} />
				</Card.Body>
			</Card>
		</>
	);
};

export default Home;

/*
<Container>
							<Row>
								<Col sm={6} md={8} lg={8}>
									<div style={{ float: "right" }}>
										<h1>
											<strong>{texts.page_home_title} </strong>
										</h1>
										<h2>
											<strong>{texts.page_home_subtitle} </strong>
										</h2>
									</div>
								</Col>
								<Col sm={6} md={4} lg={4}>
									<div style={{ float: "left" }}>
										<a
											onClick={() => {
												setShowWindow("P");
											}}
										>
											<div>
												<Image
													src="./assets/svg/portafolio.svg"
													height={10}
													width={80}
													fluid
												/>
											</div>
											<div style={{ fontSize: 12 }}>
												<i>Portafolio</i>{" "}
											</div>
										</a>
									</div>
								</Col>
							</Row>
						</Container>
*/
