import React from "react";
import LoginPage from "./components/LoginPage";
import NotePage from "./components/NotePage";
import NoteCreate from "./components/NoteCreate";
import Header from "./components/Header";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../sass/main.scss";

const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={
			props => {
				return localStorage.getItem("isAuth") === "true" ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				);
			}
			// localStorage.getItem("isAuth") ? (
			// 	<Component {...props} />
			// ) : (
			// 	<Redirect to="/login" />
			// )
		}
	/>
);

function App() {
	return (
		<Router history={history}>
			<div>
				<Header />
				<Switch>
					<Route path="/login" exact component={LoginPage} />
					{/* <Route path="/" exact component={NotePage} /> */}
					{/* <Route path="/note" exact component={NoteCreate} /> */}
					<PrivateRoute path="/" exact component={NotePage} />
					<PrivateRoute path="/note" exact component={NoteCreate} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
