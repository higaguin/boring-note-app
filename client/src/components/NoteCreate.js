import React from "react";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import { createNote } from "../actions";

class NoteCreate extends React.Component {
	constructor(props) {
		super(props);

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

export default connect(null, { createNote })(NoteCreate);
