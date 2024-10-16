import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import SocialNetworks from "../layout/Socialnetworks";

const Footer = ({ setShowWindow }) => {
	const { texts } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<div>
			<Navbar
				bg={theme.toLowerCase()}
				data-bs-theme={theme.toLowerCase()}
				expand="lg"
				fixed="sticky-bottom"
			>
				<Container>
					<Nav>
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
						<Nav.Link
							onClick={() =>
								window.open("/assets/pdf/CV-Jefferson Miranda.pdf", "_blank")
							}
						>
							{texts.slideBar_cv_title}
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Navbar
				bg={theme.toLowerCase()}
				data-bs-theme={theme.toLowerCase()}
				expand="lg"
				fixed="sticky-bottom"
			>
				<Container>
					<Nav>
						<Nav.Link>
							<SocialNetworks interactive={false} />
							<cite title="Source Title">{texts.footer_reserve_title}</cite>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Footer;
