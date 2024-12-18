import React, { useContext, useState } from "react";
import { Card, Container, CardGroup, Row, Col, Image } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import Project from "./Projects/Project";

const ListProjects = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	console.log(texts.page_projects_n1_technology);

	const listProjects = [
		{
			id: texts.page_projects_n1_id,
			name: texts.page_projects_n1_title,
			details: texts.page_projects_n1_details,
			urlPrd: texts.page_projects_n1_url,
			urlCode: texts.page_projects_n1_code,
			urlMoreInformation: texts.page_projects_n1_more_information,
			imgUrl: texts.page_projects_n1_img,
			tech: texts.page_projects_n1_technology,
		},
		{
			id: texts.page_projects_n2_id,
			name: texts.page_projects_n2_title,
			details: texts.page_projects_n2_details,
			urlPrd: texts.page_projects_n2_url,
			urlCode: texts.page_projects_n2_code,
			urlMoreInformation: texts.page_projects_n2_more_information,
			imgUrl: texts.page_projects_n2_img,
			tech: texts.page_projects_n2_technology,
		},
	];

	return (
		<>
			<Container>
				<Row xs={1} md={2} className="g-4">
					{listProjects.map((el, idx) => (
						<Col key={idx}>
							<Project data={el} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default ListProjects;
