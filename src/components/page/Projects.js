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
					<h3>{texts.page_projects_body1}</h3>
				</Card.Text>
				<ListProjects />
			</Card>
		</>
	);
};

export default Projects;
