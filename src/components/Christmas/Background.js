import React from "react";
import "../Christmas/Background.css";

const Background = ({ children }) => {
	return (
		<>
			<div className="snow-container">
				{[...Array(50)].map((_, index) => {
					const fontSize = Math.random() * 14 + 8;
					return (
						<div
							key={index}
							className="snowflake"
							style={{
								left: `${Math.random() * 100}vw`,
								fontSize: `${fontSize}px`,
								animationDuration: `${Math.random() * 20 + 4}s`,
								animationDelay: `${Math.random()}s`,
							}}
						>
							&#10052; {/* Snow character */}
						</div>
					);
				})}
			</div>
			{children}
		</>
	);
};

export default Background;
