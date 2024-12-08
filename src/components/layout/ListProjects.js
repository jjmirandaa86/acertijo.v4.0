import React, { useContext, useState } from "react";
import { Card, Container, CardGroup, Row, Col, Image } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";

const ListProjects = () => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	const [hovered, setHovered] = useState(false);

	const onMouseEnter = () => {
		setHovered(true);
	};
	const onMouseLeave = () => {
		setHovered(false);
	};

	const listProyects = [
		{
			id: texts.page_projects_n1_id,
			name: texts.page_projects_n1_title,
			details: texts.page_projects_n1_details,
			url: texts.page_projects_n1_url,
			img: texts.page_projects_n1_img,
			codeUrl: texts.page_projects_n1_code,
			imgTechnology1: texts.page_projects_n1_imgTechnology1,
			imgTechnology2: texts.page_projects_n1_imgTechnology2,
			imgTechnology3: texts.page_projects_n1_imgTechnology3,
		},
		{
			id: texts.page_projects_n2_id,
			name: texts.page_projects_n2_title,
			details: texts.page_projects_n2_details,
			url: texts.page_projects_n2_url,
			img: texts.page_projects_n2_img,
			codeUrl: texts.page_projects_n1_code,
			imgTechnology1: texts.page_projects_n1_imgTechnology1,
			imgTechnology2: texts.page_projects_n1_imgTechnology2,
			imgTechnology3: texts.page_projects_n1_imgTechnology3,
		},
	];

	const style = { borderRadius: "90%", backgroundColor: "blue" };
	const styleOver = {
		overflow: "hidden",
	};

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
								<Card.Title>{p.name}</Card.Title>
								<Row>
									<Col></Col>
									<Col xs={8} sm={12} md={8} lg={5}>
										<div style={{}}></div>
										<Card.Img
											width={2}
											//height={}
											//fluid={true}
											variant="top"
											src={"assets/svg/" + p.img}
											style={hovered ? style : styleOver}
											onMouseEnter={onMouseEnter}
											onMouseLeave={onMouseLeave}
										/>
										<Card.Body>
											<Card.Text>{p.details}</Card.Text>
											<Container>
												<div>
													<b>Technology</b>
												</div>
												<div>
													<Image
														src={"assets/svg/react-native.svg"}
														width={40}
														height={40}
													/>
													<Image src={"assets/svg/redux.svg"} width={40} height={40} />
													<Image src={"assets/svg/next-js.svg"} width={40} height={40} />
													<Image src={"assets/svg/bootstrap.svg"} width={40} height={40} />
												</div>
											</Container>
											<div style={{ padding: 5 }}></div>
											<Container>
												<Row>
													<Col>
														<a target="_blank" href={p.url} rel="noreferrer">
															<Image src={"assets/png/live.png"} width={18} height={18} />
															{" 👈 "}
															Online
														</a>
													</Col>
													<Col>
														<a
															href="https://github.com/jjmirandaa86/learningwords"
															target="_blank"
															rel="noreferrer"
														>
															Code{" 👉 "}
															<Image src={"assets/svg/code.svg"} width={18} height={18} />
														</a>
													</Col>
												</Row>
											</Container>
											<div style={{ fontSize: 11, "text-align": "end" }}>
												More information.
											</div>
										</Card.Body>
									</Col>
									<Col></Col>
								</Row>
							</Card>
						))}
					</CardGroup>
				</div>
			</Container>
		</>
	);
};

export default ListProjects;
