import React, { useContext } from "react";
import { Card, Row, Col, ListGroup, Container } from "react-bootstrap";
import ThemeContext from "../../contexts/ThemeContext";
import LanguageContext from "../../contexts/LanguageContext";
import FrontEnd from "../layout/Technology/FrontEnd";
import BackEnd from "../layout/Technology/BackEnd";
import DB from "../layout/Technology/BD";
import Others from "../layout/Technology/Others";

const Technology = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Card
				bg={theme.toLowerCase()}
				text={theme === "light" ? "dark" : "white"}
				style={{ padding: 5 }}
			>
				<Card.Body>
					<Card.Title>
						<h1>
							<strong>{texts.page_technology_title} </strong>
						</h1>
					</Card.Title>
					<Card.Text>
						<h3>{texts.page_technology_body_general} </h3>
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					{
						//TODO: FRONTEND
					}
					<div style={{ padding: 10 }}>
						<Container className="border border-warning rounded-4 p-2">
							<Row style={{ padding: 10 }}>
								<Col xs={12} sm={12} md={6} lg={7}>
									<ListGroup.Item>
										<h3>{texts.page_technology_body_frontEnd_title} </h3>
										<h6>{texts.page_technology_body_frontEnd} </h6>
									</ListGroup.Item>
								</Col>
								<Col xs={12} sm={12} md={6} lg={5} style={{ display: "flex" }}>
									<FrontEnd sizeIcon={28} sizeText={11} />
								</Col>
							</Row>
						</Container>
					</div>
					{
						//TODO: BACKEND
					}
					<div style={{ padding: 10 }}>
						<Container className="border border-warning rounded-4 p-2">
							<Row style={{ padding: 10 }}>
								<Col xs={12} sm={12} md={6} lg={5} style={{ display: "flex" }}>
									<BackEnd sizeIcon={28} sizeText={11} />
								</Col>
								<Col xs={12} sm={12} md={6} lg={7}>
									<ListGroup.Item>
										<h3>{texts.page_technology_body_backEnd_title} </h3>
										<h6>{texts.page_technology_body_backEnd} </h6>
									</ListGroup.Item>
								</Col>
							</Row>
						</Container>
					</div>
					{
						//TODO: BD
					}

					<div style={{ padding: 10 }}>
						<Container className="border border-warning rounded-4 p-2">
							<Row style={{ padding: 10 }}>
								<Col xs={12} sm={12} md={6} lg={7}>
									<ListGroup.Item>
										<h3>{texts.page_technology_body_bd_title} </h3>
										<h6>{texts.page_technology_body_bd} </h6>
									</ListGroup.Item>
								</Col>
								<Col xs={12} sm={12} md={6} lg={5} style={{ display: "flex" }}>
									<DB sizeIcon={28} sizeText={11} />
								</Col>
							</Row>
						</Container>
					</div>

					{
						//TODO: OTHERS
					}
					<div style={{ padding: 10 }}>
						<Container className="border border-warning rounded-4 p-2">
							<Row style={{ padding: 10 }}>
								<Col xs={12} sm={12} md={6} lg={5} style={{ display: "flex" }}>
									<Others sizeIcon={28} sizeText={11} />
								</Col>
								<Col xs={12} sm={12} md={6} lg={7}>
									<ListGroup.Item>
										<h3>{texts.page_technology_body_other_title} </h3>
										<h6>{texts.page_technology_body_other} </h6>
									</ListGroup.Item>
								</Col>
							</Row>
						</Container>
					</div>
				</ListGroup>
			</Card>
		</>
	);
};

export default Technology;
