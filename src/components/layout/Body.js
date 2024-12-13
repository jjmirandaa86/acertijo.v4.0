import Home from "../page/Home";
import Projects from "../page/Projects";
import Technology from "../page/Technology";

const Body = ({ showWindow, setShowWindow }) => {
	return (
		<div className="p-2">
			{showWindow === "H" && <Home setShowWindow={setShowWindow} />}
			{showWindow === "P" && <Projects />}
			{showWindow === "T" && <Technology />}
		</div>
	);
};

export default Body;
