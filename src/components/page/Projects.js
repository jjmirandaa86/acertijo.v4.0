import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import ListProjects from "../layout/ListProjects";
import { Card } from "react-bootstrap";

const Projects = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Card bg={theme.toLowerCase()} text={theme === "light" ? "dark" : "white"}>
				<Card.Title className="m-1">
					<h1>{texts.page_projects_title}</h1>
				</Card.Title>
				<Card.Text>
					<h4>{texts.page_projects_body1}</h4>
				</Card.Text>
				<ListProjects />
			</Card>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default Projects;
