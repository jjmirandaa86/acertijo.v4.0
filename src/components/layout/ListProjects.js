import React, { useContext } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

const ListProjects = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const listProyects = [
		{
			id: 1,
			name: "English words",
			details: "List of words in foreign language for learning",
			url: "https://prd.english.acertijo.dev",
			img: "learning-words.svg",
		},
		{
			id: 2,
			name: "Business administration",
			details: "Software for controlling stock and sales operations",
			url: "https://prd.miranda.acertijo.dev",
			img: "miranda-software.svg",
		},
		{
			id: 3,
			name: "CV interactive",
			details: "Curriculum vitae interactive",
			url: "https://prd.cv.acertijo.dev",
			img: "cv-jm.svg",
		},
	];

	return (
		<>
			<Container>
				<div style={{ padding: 20 }}>
					<h2>Proyects</h2>
				</div>
				<div>
					<CardGroup>
						{listProyects.map((p) => (
							<Card
								bg={theme.toLowerCase()}
								text={theme.toLowerCase() === "light" ? "dark" : "white"}
								key={p.id}
							>
								<Card.Img
									width={2}
									//height={}
									//fluid={true}
									variant="top"
									src={"assets/svg/" + p.img}
								/>
								<Card.Body>
									<Card.Title>{p.name} </Card.Title>
									<Card.Text>{p.details}</Card.Text>
									<a target="_blank" href={p.url} rel="">
										Link
									</a>
								</Card.Body>
							</Card>
						))}
					</CardGroup>
				</div>
			</Container>
		</>
	);
};

export default ListProjects;
