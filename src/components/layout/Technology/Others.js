import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SiAndroidstudio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuChartNoAxesCombined } from "react-icons/lu";

import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

const Others = ({ sizeIcon, sizeText }) => {
	const data = [
		{
			id: 1,
			name: "Android Studio",
			component: (color) => <SiAndroidstudio size={sizeIcon} color={color} />,
			color: "#87B94F",
		},
		{
			id: 2,
			name: "Docker",
			component: (color) => <FaDocker size={sizeIcon} color={color} />,
			color: "#0895E7",
		},
		{
			id: 3,
			name: "Git",
			component: (color) => <FaGitAlt size={sizeIcon} color={color} />,
			color: "#F15639",
		},
		{
			id: 4,
			name: "Github",
			component: (color) => <FaGithub size={sizeIcon} color={color} />,
			color: "#802D93",
		},
		{
			id: 5,
			name: "Power BI",
			component: (color) => (
				<LuChartNoAxesCombined size={sizeIcon} color={color} />
			),
			color: "#F1CA18",
		},
		{
			id: 6,
			name: "MacOS",
			component: (color) => <FaApple size={sizeIcon} color={color} />,
			color: "",
		},
		{
			id: 7,
			name: "Windows",
			component: (color) => <FaWindows size={sizeIcon} color={color} />,
			color: "#09A1E4",
		},
		{
			id: 8,
			name: "Linux",
			component: (color) => <FaLinux size={sizeIcon} color={color} />,
			color: "#545C61	",
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

export default Others;
