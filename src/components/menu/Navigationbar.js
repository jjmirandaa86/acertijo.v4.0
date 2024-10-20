import { Navbar, Container, Col, Row } from "react-bootstrap";
import DarkMode from "../layout/Darkmode";
import Language from "../layout/Language";

const NavigationBar = () => {
	return (
		<Container>
			<Navbar>
				<Container>
					<Container>
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text style={{ display: "inline-block" }}>
								<Row>
									<Col style={{ padding: 4 }}>
										<DarkMode height={25} width={25} />
									</Col>
									<Col style={{ padding: 4 }}>
										<Language height={20} width={20} />
									</Col>
								</Row>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Container>
			</Navbar>
		</Container>
	);
};

export default NavigationBar;
