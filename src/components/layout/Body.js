import Home from "../page/Home";
import Projects from "../page/Projects";

const Body = ({ showWindow, setShowWindow }) => {
	return (
		<>
			{showWindow === "H" && <Home setShowWindow={setShowWindow} />}
			{showWindow === "P" && <Projects />}
		</>
	);
};

export default Body;
