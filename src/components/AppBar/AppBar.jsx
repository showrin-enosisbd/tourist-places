import React from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row } from "react-bootstrap";
import Button from "../Button";

const AppBar = () => {
	return (
		<header className="app-bar">
			<Grid fluid>
				<Row>
					<Col className="app-bar__content" xs={12} md={10} mdOffset={1}>
						<div className="app-bar__brand-name">
							<Link className="app-bar__nav-link" to="/">
								React CRUD
							</Link>
						</div>
						<nav className="app-bar__nav">
							<Link className="app-bar__nav-link" to="/login">
								<Button bsStyle="link">Login</Button>
							</Link>
							|
							<Link className="app-bar__nav-link" to="/">
								<Button bsStyle="link">SignUp</Button>
							</Link>
						</nav>
					</Col>
				</Row>
			</Grid>
		</header>
	);
};

export default AppBar;
