"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import HookChristmas from "./hooks/HookChristmas";
import "./App.css";
import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { MessageProvider } from "./contexts/MessageContext";
import Background from "./components/Christmas/Background";
import Splash from "./components/page/Splash";

function App() {
	//Control Splash or Main
	const [isApp, setIsApp] = useState(true);

	const {
		isChristmas,
		setIsChristmas,
		validateChristmas,
		nowDate,
		startChristmas,
		endChristmas,
	} = HookChristmas();

	//Show the background Christmas
	useEffect(() => {
		setIsChristmas(validateChristmas(startChristmas, endChristmas, nowDate));
		setTimeout(() => {
			setIsApp(!isApp);
		}, 3000);
	}, []);

	//Change Splash to App screen

	return (
		<div className="App">
			<ThemeProvider>
				<LanguageProvider>
					<LoadingProvider>
						<MessageProvider>
							{/* Control Splash or App*/}
							{isApp && <Splash />}
							{!isApp && isChristmas && (
								<Background>
									<Main isChristmas />
								</Background>
							)}

							{!isApp && !isChristmas && <Main isChristmas />}
						</MessageProvider>
					</LoadingProvider>
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
