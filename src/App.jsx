import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Button bsStyle="primary">Helloooo</Button>
				<Switch>
					<Route
						path="/places"
						component={() => "Places"}
					/>
					<Route
						path="/"
						component={() => "Home"}
						exact
					/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
