import React from "react";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { getNote, editNote } from "../actions";

class NoteEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { note: {} };

		props.getNote(this.props.match.params.id).then(() => {
			this.setState({ note: props.note });
		});

		this.onSubmit = formValues => {
			props.editNote(formValues).then(() => {
				props.history.push("/");
			});
		};
	}

	render() {
		const { note } = this.props;

		if (!note) return <div></div>;

		return <NoteForm onSubmit={this.onSubmit} note={note}></NoteForm>;
	}
}

const mapStateToProps = state => {
	return state.note;
};

export default connect(mapStateToProps, { getNote, editNote })(NoteEdit);
