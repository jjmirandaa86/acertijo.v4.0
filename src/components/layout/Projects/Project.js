import React, { useContext } from "react";
import { Card, ListGroup, Image } from "react-bootstrap";
import LanguageContext from "../../../contexts/LanguageContext";
import ThemeContext from "../../../contexts/ThemeContext";

const Project = ({ data }) => {
	console.log(data);
	const {
		id,
		name,
		imgUrl,
		details,
		tech,
		urlPrd,
		urlCode,
		urlMoreInformation,
	} = data;

	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	let styleCard = theme.toLowerCase() === "light" ? "" : "bg-dark text-white";

	return (
		<div style={{ margin: 10 }}>
			<Card
				bg={theme.toLowerCase()}
				text={theme.toLowerCase() === "light" ? "dark" : "white"}
				key={id}
				border="warning"
			>
				<Card.Title>
					<h3>{name}</h3>
				</Card.Title>
				<Card.Img variant="top" src={imgUrl} width={40} height={200} />
				<Card.Body>
					<Card.Text>
						<h6>{details}</h6>
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item className={styleCard}>
						<h6>{texts.page_projects_technology} </h6>
						<div style={{ display: "inline-flex" }}>
							{tech.map((el) => (
								<div style={{ margin: 10 }}>
									<div>
										<Image src={el.img} width={40} height={40} />
									</div>
									<div style={{ fontSize: 11 }}>{el.name}</div>
								</div>
							))}
						</div>
					</ListGroup.Item>
					<ListGroup.Item className={`${styleCard} d-flex justify-content-between`}>
						<a target="_blank" href={urlPrd} rel="noreferrer">
							<Image src={"assets/png/live.png"} width={18} height={18} />
							{" 👈 "}
							{texts.page_projects_online}
						</a>
						<a href={urlCode} target="_blank" rel="noreferrer">
							{texts.page_projects_code}
							{" 👉 "}
							<Image src={"assets/svg/code.svg"} width={18} height={18} />
						</a>
					</ListGroup.Item>
				</ListGroup>
				<Card.Body className="d-flex justify-content-end">
					<Card.Link>
						<a href={urlMoreInformation} target="_blank" rel="noreferrer">
							{texts.page_projects_more_information}
						</a>
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Project;
