import React from "react";
import LoginPage from "./components/LoginPage";
import NotePage from "./components/NotePage";
import NoteCreate from "./components/NoteCreate";
import NoteEdit from "./components/NoteEdit";
import Header from "./components/Header";
import { connect } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../sass/main.scss";

const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			return localStorage.getItem("isAuth") === "true" ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			);
		}}
	/>
);

function App(props) {
	const showLoad = () => {
		if (props.load) {
			return (
				<div className="modal-screen">
					<div className="sk-double-bounce">
						<div className="sk-child sk-double-bounce1"></div>
						<div className="sk-child sk-double-bounce2"></div>
					</div>
				</div>
			);
		}
		return;
	};
	return (
		<Router history={history}>
			<div>
				{showLoad()}
				<Header />
				<Switch>
					<Route path="/login" exact component={LoginPage} />
					<PrivateRoute path="/" exact component={NotePage} />
					<PrivateRoute path="/note" exact component={NoteCreate} />
					<PrivateRoute path="/note/edit/:id" exact component={NoteEdit} />
				</Switch>
			</div>
		</Router>
	);
}

const mapStateToProps = state => {
	return { load: state.general.load };
};

export default connect(mapStateToProps, {})(App);
