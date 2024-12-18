import React, { useContext } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import Logo from "../layout/Logo";
import NavigationBar from "./Navigationbar";
import LanguageContext from "../../contexts/LanguageContext";
import ThemeContext from "../../contexts/ThemeContext";
import HookNavigation from "../../hooks/HookNavigation";
import NavigationLanguageMode from "./NavigationLanguageMode";

const Navigation = ({ setShowWindow, showWindow }) => {
	const { theme } = useContext(ThemeContext);
	const { texts } = useContext(LanguageContext);

	const { show, handleShow, handleClose } = HookNavigation();
	const expand = false;

	return (
		<>
			<Navbar
				key={expand}
				expand={expand}
				//</>bg={theme}
				bg={"dark"}
				data-bs-theme={"dark"}
			>
				<Container>
					<Navbar.Brand href="#">
						<Logo darkMode={theme} px="190" py="55" />
					</Navbar.Brand>
					<Navbar.Text style={{ display: "flex", alignItems: "center" }}>
						<div style={{ margin: "10px" }}>
							<NavigationLanguageMode />
						</div>
						<Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
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
								<Nav
									variant="pills"
									className="justify-content-end flex-grow-1 pe-3"
									activeKey={showWindow}
								>
									<Nav.Item>
										<Nav.Link
											href="#"
											eventKey="H"
											onClick={() => {
												setShowWindow("H");
												handleClose();
											}}
										>
											{texts.slideBar_home_title}
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											href="#"
											eventKey="T"
											onClick={() => {
												setShowWindow("T");
												handleClose();
											}}
										>
											{texts.slideBar_technology_title}
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											href="#"
											eventKey="P"
											onClick={() => {
												setShowWindow("P");
												handleClose();
											}}
										>
											{texts.slideBar_project_title}
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											href="#"
											onClick={() =>
												window.open("/assets/pdf/CV-Jefferson Miranda.pdf", "_blank")
											}
										>
											{texts.slideBar_cv_title}
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link style={{ float: "right", display: "flex" }}>
											<NavigationLanguageMode />
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Navbar.Text>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
