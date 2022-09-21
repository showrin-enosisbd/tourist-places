import React from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row } from "react-bootstrap";
import Button from "../Button";

const AppBar = ({ user }) => {
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
							{user && user.username ? (
								<span className="app-bar__nav-user">@{user.username}</span>
							) : (
								<Link className="app-bar__nav-link" to="/login">
									<Button bsStyle="link">Login</Button>
								</Link>
							)}
							|
							{user && user.username ? (
								<Link className="app-bar__nav-link" to="/logout">
									<Button bsStyle="link">Logout</Button>
								</Link>
							) : (
								<Link className="app-bar__nav-link" to="/signup">
									<Button bsStyle="link">Signup</Button>
								</Link>
							)}
						</nav>
					</Col>
				</Row>
			</Grid>
		</header>
	);
};

export default AppBar;
