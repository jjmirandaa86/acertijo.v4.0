import Home from "../page/Home";
import Projects from "../page/Projects";

const Body = ({ showWindow }) => {
	return (
		<>
			{showWindow === "H" && <Home />}
			{showWindow === "P" && <Projects />}
		</>
	);
};

export default Body;
