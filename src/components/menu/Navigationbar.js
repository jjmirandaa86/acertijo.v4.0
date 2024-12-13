import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Col, Row, Image } from "react-bootstrap";
import {
	TbChristmasBall,
	TbChristmasTree,
	TbChristmasTreeFilled,
	TbBrandLinktree,
	TbHeart,
} from "react-icons/tb";
import LanguageContext from "../../contexts/LanguageContext";
import Marquee from "react-fast-marquee";

const NavigationBar = () => {
	const { texts } = useContext(LanguageContext);

	const arrayMessageChristmas = [
		{
			id: 1,
			message: texts.msg_Christmas_1,
			imgComponent: <TbChristmasBall color={"red"} />,
		},
		{
			id: 2,
			message: texts.msg_Christmas_2,
			imgComponent: <TbChristmasTree color={"red"} />,
		},
		{
			id: 3,
			message: texts.msg_Christmas_3,
			imgComponent: <TbChristmasTreeFilled color={"red"} />,
		},
		{
			id: 4,
			message: texts.msg_Christmas_4,
			imgComponent: <TbBrandLinktree color={"red"} />,
		},
		{
			id: 5,
			message: texts.msg_Christmas_5,
			imgComponent: <TbHeart color={"red"} />,
		},
	];

	const randomMessageChristmas = arrayMessageChristmas
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	const MarqueeList = () => {
		return (
			<>
				{randomMessageChristmas.map((el) => (
					<div key={el.id} className="mc-0 d-inline-flex fs-4">
						<div style={{ marginRight: "13px" }}>{el.imgComponent}</div>
						<div style={{ marginRight: "100px" }}>{el.message}</div>
					</div>
				))}{" "}
			</>
		);
	};

	return (
		<Container>
			<div
				style={{
					background: "-webkit-linear-gradient(orange, red)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					color: "red",
					padding: "15px",
				}}
			>
				<Row style={{ alignItems: "center" }}>
					<Col xs={1} sm={1} md={1} lg={1}>
						<Image src="/assets/png/feliz-navidad.png" height={60} />{" "}
					</Col>
					<Col xs={11} sm={11} md={11} lg={11}>
						<Marquee speed={120}>
							<MarqueeList />
						</Marquee>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default NavigationBar;
