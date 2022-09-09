import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/places"
					component={Places}
				/>
				<Route
					path="/"
					component={Home}
					exact
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
