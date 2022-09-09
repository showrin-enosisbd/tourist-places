import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddPlaceForm from "./components/AddPlaceForm";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Grid>
				<Row>
					<Col
						xs={12}
						md={8}
						mdOffset={2}
					>
						<Switch>
							<Route
								path="/places"
								component={() => "Places"}
							/>
							<Route
								path="/"
								component={AddPlaceForm}
								exact
							/>
						</Switch>
					</Col>
				</Row>
			</Grid>
		</BrowserRouter>
	);
}

export default App;
