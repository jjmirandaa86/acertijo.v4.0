import React, { useContext, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Navigation from "../components/menu/Navigation";
import NavigationBar from "../components/menu/Navigationbar";
import Body from "./layout/Body";
import Footer from "../components/layout/Footer";
import ThemeContext from "../contexts/ThemeContext";
import MessageToast from "./layout/MessageToast";

const Main = () => {
	const { theme } = useContext(ThemeContext);

	const [showWindow, setShowWindow] = useState("H");

	const backgroundImageDark =
		"linear-gradient(163deg, rgba(43,48,53,1) 0%, rgba(28,140,180,1) 37%, rgba(255,193,7,1) 76%, rgba(255,255,255,1) 100%)";
	const backgroundImageLight =
		"linear-gradient(163deg, rgba(255,255,255,1) 0%, rgba(28,140,180,1) 37%, rgba(255,193,7,1) 76%, rgba(43,48,53,1) 100%)";

	return (
		<div
			style={{
				backgroundImage:
					theme === "dark" ? backgroundImageDark : backgroundImageLight,
				minHeight: "100dvh",
			}}
		>
			<Navigation setShowWindow={setShowWindow} showWindow={showWindow} />
			<NavigationBar />
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
