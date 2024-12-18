import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiMantine } from "react-icons/si";
import { SiReactbootstrap } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const FrontEnd = ({ sizeIcon, sizeText }) => {
	const data = [
		{
			id: 1,
			name: "ReactJs",
			component: (color) => <FaReact size={sizeIcon} color={color} />,
			color: "#5DD4F0",
		},
		{
			id: 2,
			name: "JavaScript",
			component: (color) => <IoLogoJavascript size={sizeIcon} color={color} />,
			color: "#F7E025",
		},
		{
			id: 3,
			name: "Redux",
			component: (color) => <SiRedux size={sizeIcon} color={color} />,
			color: "#794FBE",
		},
		{
			id: 4,
			name: "Axios",
			component: (color) => <SiAxios size={sizeIcon} color={color} />,
			color: "#624688",
		},
		{
			id: 5,
			name: "HTML5",
			component: (color) => <FaHtml5 size={sizeIcon} color={color} />,
			color: "#E5532D",
		},
		{
			id: 6,
			name: "Css",
			component: (color) => <FaCss3Alt size={sizeIcon} color={color} />,
			color: "#2848DF",
		},
		{
			id: 7,
			name: "Bootstrap",
			component: (color) => <FaBootstrap size={sizeIcon} color={color} />,
			color: "#7C18F8",
		},
		{
			id: 8,
			name: "Mantine",
			component: (color) => <SiMantine size={sizeIcon} color={color} />,
			color: "#399DF1",
		},
		{
			id: 9,
			name: "React-Bootstrap",
			component: (color) => <SiReactbootstrap size={sizeIcon} color={color} />,
			color: "#41E0FD",
		},
		{
			id: 10,
			name: "Tailwind",
			component: (color) => <RiTailwindCssFill size={sizeIcon} color={color} />,
			color: "#38BDF8",
		},
		{
			id: 11,
			name: "Vite",
			component: (color) => <SiVite size={sizeIcon} color={color} />,
			color: "#5713CD",
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

export default FrontEnd;
