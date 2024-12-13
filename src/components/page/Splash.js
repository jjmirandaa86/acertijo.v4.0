import React, { useEffect, useState } from "react";
import { Image, Card, Container, Col, Row } from "react-bootstrap";
import Logo from "../layout/Logo";
import Rubik from "../layout/Splash/Rubik";

const Splash = () => {
	let i = 0,
		txt = "Software developer.",
		speed = 100;

	useEffect(() => {
		typeWriter();
	}, []);

	function typeWriter() {
		if (i < txt.length) {
			document.getElementById("demo").innerHTML += txt.charAt(i);
			i++;
			setTimeout(typeWriter, speed);
		}
	}

	return (
		<div
			style={{
				background: "#212529",
				minHeight: "100dvh",
				alignItems: "center",
				display: "flex",
				textAlign: "center",
			}}
		>
			<Container>
				<Logo px={"260"} />
				<h6 style={{ color: "white" }}>
					<p id={"demo"} className="fw-bold"></p>
				</h6>
				<div style={{ display: "inline-flex", alignItems: "center" }}>
					<Rubik />
				</div>
			</Container>
		</div>
	);
};

export default Splash;
