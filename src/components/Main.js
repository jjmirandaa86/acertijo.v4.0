import React, { useContext, useState, useEffect, Suspense } from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/menu/Navigation";
import NavigationBar from "../components/menu/Navigationbar";
import Body from "./layout/Body";
import Footer from "../components/layout/Footer";
import ThemeContext from "../contexts/ThemeContext";
import LoadingContext from "../contexts/LoadingContext";
import Loading from "./page/Loading";
import MessageToast from "./layout/MessageToast";

const Main = () => {
	const { theme } = useContext(ThemeContext);
	const { loading, setLoading } = useContext(LoadingContext);

	const [showWindow, setShowWindow] = useState("H");

	/*
	useEffect(() => {
		setLoading(false);
	});
*/
	return (
		<Container>
			<Suspense fallback={<Loading />}>
				<div className={"bg-" + theme}>
					<Navigation setShowWindow={setShowWindow} />
					<NavigationBar />
					<Container>
						{
							//loading ? <Loading /> : <Body showWindow={showWindow} />
						}
						<Body showWindow={showWindow} setShowWindow={setShowWindow} />
					</Container>
					<Footer setShowWindow={setShowWindow} />
				</div>
				<MessageToast />
			</Suspense>
		</Container>
	);
};

export default Main;
