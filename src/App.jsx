import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

import "./App.scss";
import Edit from "./pages/Edit";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/new" component={New} />
					<Route path="/edit/:id" component={Edit} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
