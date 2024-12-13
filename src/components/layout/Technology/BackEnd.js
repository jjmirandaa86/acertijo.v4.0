import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { TbApi } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

const BackEnd = ({ sizeIcon, sizeText }) => {
	const data = [
		{
			id: 1,
			name: "NodeJs",
			component: (color) => <FaNodeJs size={sizeIcon} color={color} />,
			color: "#509941",
		},
		{
			id: 2,
			name: "Express",
			component: (color) => <SiExpress size={sizeIcon} color={color} />,
			color: "",
		},
		{
			id: 3,
			name: "RESTful",
			component: (color) => <TbApi size={sizeIcon} color={color} />,
			color: "Wnite",
		},
		{
			id: 3,
			name: "Laravel",
			component: (color) => <FaLaravel size={sizeIcon} color={color} />,
			color: "#F72C1F",
		},
	];

	return (
		<Container className="p-3">
			<Row>
				{data.map((el) => {
					return (
						<Col>
							<div id={el.id} style={{ alignItems: "center", padding: 5 }}>
								<div>{el.component(el.color)} </div>
								<div style={{ fontSize: sizeText }}>{el.name} </div>
							</div>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default BackEnd;
