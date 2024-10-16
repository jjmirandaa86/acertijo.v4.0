import Home from "../page/Home";
import Projects from "../page/Projects";

const Body = ({ showWindow, setShowWindow }) => {
	return (
		<div class="m-2">
			{showWindow === "H" && <Home setShowWindow={setShowWindow} />}
			{showWindow === "P" && <Projects />}
		</div>
	);
};

export default Body;
