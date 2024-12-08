"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import HookChristmas from "./hooks/HookChristmas";
import "./App.css";
import React, { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { MessageProvider } from "./contexts/MessageContext";
import Background from "./components/Christmas/Background";

function App() {
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
	}, []);

	return (
		<div className="App">
			<ThemeProvider>
				<LanguageProvider>
					<LoadingProvider>
						<MessageProvider>
							{isChristmas === true ? (
								<>
									<Background>
										<Main isChristmas />
									</Background>
								</>
							) : (
								<Main />
							)}
						</MessageProvider>
					</LoadingProvider>
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
