import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./pages/Home";
import New from "./pages/New";
import EditPageContainer from "./containers/EditPageContainer";
import NotFound from "./pages/NotFound";

import "./App.scss";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/new" component={New} />
					<Route path="/edit/:id" component={EditPageContainer} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
