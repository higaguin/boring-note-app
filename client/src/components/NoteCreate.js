import React from "react";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { createNote, changeHeader, changeLoad } from "../actions";

class NoteCreate extends React.Component {
	constructor(props) {
		super(props);

		props.changeLoad(false);

		props.changeHeader("back");

		this.onSubmit = formValues => {
			props.createNote(formValues).then(() => {
				props.history.push("/");
			});
		};
	}

	render() {
		return <NoteForm onSubmit={this.onSubmit}></NoteForm>;
	}
}

export default connect(null, {
	createNote,
	changeHeader,
	changeLoad
})(NoteCreate);
