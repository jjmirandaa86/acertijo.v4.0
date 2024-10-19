import { Navbar, Container } from "react-bootstrap";
import DarkMode from "../layout/Darkmode";
import Language from "../layout/Language";

const NavigationBar = () => {
	return (
		<>
			<Navbar>
				<Container>
					<Navbar.Text></Navbar.Text>
					<Navbar.Text>
						<DarkMode height={25} width={25} /> <Language height={20} width={20} />
					</Navbar.Text>
				</Container>
			</Navbar>
		</>
	);
};

export default NavigationBar;
