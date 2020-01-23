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
	}

	render() {
		const icon =
			this.props.location.pathname === "/" ? (
				<i
					className={`fa fa-${
						this.props.mode === "edit" ? "pencil" : "times"
					} main-header__cornet-icon`}
					onClick={this.onChangeMode}
				></i>
			) : (
				""
			);

		return (
			<div className="main-header">
				{icon}
				<div>Note App</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.general;
};

export default connect(mapStateToProps, { changeMode })(withRouter(Header));
