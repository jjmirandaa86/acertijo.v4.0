import React, { useContext, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/menu/Navigation";
import NavigationBar from "../components/menu/Navigationbar";
import Body from "./layout/Body";
import Footer from "../components/layout/Footer";
import ThemeContext from "../contexts/ThemeContext";
import MessageToast from "./layout/MessageToast";

const Main = ({ isChristmas }) => {
	const { background } = useContext(ThemeContext);

	const [showWindow, setShowWindow] = useState("H");

	return (
		<div
			style={{
				backgroundImage: background,
				minHeight: "100dvh",
			}}
		>
			<Navigation setShowWindow={setShowWindow} showWindow={showWindow} />
			{isChristmas && <NavigationBar />}
			<div>
				<Container>
					<Container>
						<Row>
							<Col></Col>
							<Col xs={12} sm={12} md={12}>
								<Body showWindow={showWindow} setShowWindow={setShowWindow} />
							</Col>
							<Col></Col>
						</Row>
					</Container>
					<MessageToast />
				</Container>
			</div>
			<Footer setShowWindow={setShowWindow} />
		</div>
	);
};

export default Main;
