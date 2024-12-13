import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";

const DB = ({ sizeIcon, sizeText }) => {
	const data = [
		{
			id: 1,
			name: "mySql",
			component: (color) => <GrMysql size={sizeIcon} color={color} />,
			color: "#215372",
		},
		{
			id: 2,
			name: "Sql Server",
			component: (color) => <DiMsqlServer size={sizeIcon} color={color} />,
			color: "#AF3B41",
		},
		{
			id: 3,
			name: "Oracle",
			component: (color) => <GrOracle size={sizeIcon} color={color} />,
			color: "#FF0808",
		},
		{
			id: 4,
			name: "PostgreSQL",
			component: (color) => <BiLogoPostgresql size={sizeIcon} color={color} />,
			color: "#376694",
		},
		{
			id: 5,
			name: "Mongo",
			component: (color) => <BiLogoMongodb size={sizeIcon} color={color} />,
			color: "#1AAD57",
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

export default DB;
