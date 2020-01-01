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
    console.log(this.props);
    return (
      <div className="App">
        <FacebookLogin
          appId="2415591195382213"
          textButton="Facebook"
          callback={response => {
            this.props.signIn(response.accessToken).then(() => {
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
