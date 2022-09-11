import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/"
					component={Home}
					exact
				/>
				<Route
					path="/new"
					component={New}
				/>
				<Route component={() => "Not found"} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
