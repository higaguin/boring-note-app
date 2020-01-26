import React from "react";
import { connect } from "react-redux";
import { changeMode } from "../actions";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.onChangeMode = values => {
			this.props.changeMode();
		};

		this.goBack = () => {
			this.props.history.goBack();
		};

		this.signOut = () => {
			localStorage.removeItem("isAuth");
			localStorage.removeItem("token");

			this.props.history.push("/login");
		};
	}

	componentDidMount() {
		const element = document.querySelector(".main-header__cornet-icon");
		if (element) {
			element.addEventListener("animationend", function() {
				element.classList.remove("animated", "fadeIn");
			});
		}
	}

	render() {
		const icon =
			localStorage.getItem("isAuth") === "true" ? (
				this.props.header === "list" ? (
					<i
						className={`fa fa-${
							this.props.mode === "edit" ? "pencil" : "times"
						} main-header__cornet-icon animated fadeIn faster`}
						onClick={this.onChangeMode}
					></i>
				) : (
					<i
						className={`fa fa-angle-left main-header__cornet-icon animated fadeIn faster`}
						onClick={this.goBack}
					></i>
				)
			) : (
				<div></div>
			);

		const sign_out =
			localStorage.getItem("isAuth") === "true" ? (
				<i
					className={`fa fa-sign-out main-header__cornet-icon animated fadeIn faster`}
					onClick={this.signOut}
				></i>
			) : (
				<div></div>
			);

		return (
			<div className="main-header">
				{icon}
				<div>Boring Note App</div>
				{sign_out}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.general;
};

export default connect(mapStateToProps, { changeMode })(withRouter(Header));
