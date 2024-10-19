"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { MessageProvider } from "./contexts/MessageContext";
function App() {
	return (
		<div className="App">
			<ThemeProvider>
				<LanguageProvider>
					<LoadingProvider>
						<MessageProvider>
							<Main />
						</MessageProvider>
					</LoadingProvider>
				</LanguageProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
