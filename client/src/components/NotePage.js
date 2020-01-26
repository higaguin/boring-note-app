import React from "react";
import NewNoteCard from "./NewNoteCard";
import NoteList from "./NoteList";
import { changeHeader } from "../actions";
import { connect } from "react-redux";

class NotePage extends React.Component {
	constructor(props) {
		super(props);

		props.changeHeader("list");

		this.state = { notes: [] };

		this.onClickNew = () => {
			props.history.push("/note");
		};
	}

	render() {
		return (
			<div className="main-container">
				<div>
					<NewNoteCard onClickNew={this.onClickNew} />
				</div>
				<div>
					<NoteList history={this.props.history} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { load: state.general.load, note: state.note };
};

export default connect(mapStateToProps, { changeHeader })(NotePage);
