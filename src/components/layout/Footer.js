import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import SocialNetworks from "../layout/Socialnetworks";

const Footer = ({ setShowWindow }) => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<Container>
			<Navbar
				bg={theme.toLowerCase()}
				data-bs-theme={theme.toLowerCase()}
				expand="lg"
				fixed="sticky-bottom"
				//className="bg-body-tertiary "
				//variant={theme.toLowerCase()}
				//text={theme === "light" ? "dark" : "light"}
			>
				<Nav
				//className="flex-column"
				//fixed="bottom"
				//variant={theme.toLowerCase()}
				//text={theme === "light" ? "dark" : "light"}
				>
					<Nav.Link
						onClick={() => {
							setShowWindow("H");
						}}
					>
						{texts.slideBar_home_title}
					</Nav.Link>
					<Nav.Link
						onClick={() => {
							setShowWindow("P");
						}}
					>
						{texts.slideBar_project_title}
					</Nav.Link>
					<Nav.Item>
						<SocialNetworks interactive={false} />
					</Nav.Item>
					<Nav.Item>
						<cite title="Source Title">{texts.footer_reserve_title}</cite>
					</Nav.Item>
				</Nav>
			</Navbar>
		</Container>
	);
};

export default Footer;
