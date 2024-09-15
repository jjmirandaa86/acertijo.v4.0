import React, { useContext } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import Logo from "../layout/Logo";
import NavigationBar from "./Navigationbar";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import HookNavigation from "../../hooks/HookNavigation";

const Navigation = ({ setShowWindow }) => {
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);

	const { show, handleShow, handleClose } = HookNavigation();

	return (
		<>
			<Navbar expand={false} variant={theme}>
				<Container fluid={true}>
					<Navbar.Brand href="#">
						<Logo darkMode={theme} px="230" py="60" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
					<Navbar.Offcanvas
						id="offcanvasNavbar"
						placement="end"
						show={show}
						onHide={handleClose}
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id="offcanvasNavbarLabel">
								{texts.slideBar_menu_title}
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link
									onClick={() => {
										setShowWindow("H");
										handleClose();
									}}
								>
									{texts.slideBar_home_title}
								</Nav.Link>
								<Nav.Link
									onClick={() => {
										setShowWindow("P");
										handleClose();
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
								<Nav.Link>
									<NavigationBar />
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
