import React, { useContext } from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

const ListProjects = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const listProyects = [
		{
			id: texts.page_projects_n1_id,
			name: texts.page_projects_n1_title,
			details: texts.page_projects_n1_details,
			url: texts.page_projects_n1_url,
			img: texts.page_projects_n1_img,
		},
		{
			id: texts.page_projects_n2_id,
			name: texts.page_projects_n2_title,
			details: texts.page_projects_n2_details,
			url: texts.page_projects_n2_url,
			img: texts.page_projects_n2_img,
		},
		{
			id: texts.page_projects_n3_id,
			name: texts.page_projects_n3_title,
			details: texts.page_projects_n3_details,
			url: texts.page_projects_n3_url,
			img: texts.page_projects_n3_img,
		},
	];

	return (
		<>
			<Container>
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
