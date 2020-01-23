import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { signIn } from "../actions";

class LoginPage extends React.Component {
	//   responseFacebook(response) {
	//     this.props.signIn(response);
	//   }
	//fsdfd

	render() {
		return (
			<div className="login-container">
				<span>For now, log in only with</span>
				<FacebookLogin
					appId="2415591195382213"
					textButton="Facebook"
					cssClass="my-facebook-button-class"
					callback={response => {
						this.props.signIn(response.accessToken).then(() => {
							localStorage.setItem("isAuth", true);
							localStorage.setItem("token", this.props.token);
							this.props.history.push("/");
						});
					}}
					fields="name,email,picture"
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.authentication;
};

export default connect(mapStateToProps, { signIn })(LoginPage);
