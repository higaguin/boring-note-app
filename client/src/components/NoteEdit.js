import React from "react";
import NoteForm from "./NoteForm";
import { connect } from "react-redux";
import {
	getNote,
	editNote,
	clearNote,
	changeHeader,
	changeLoad,
	equalTag
} from "../actions";

class NoteEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { note: {} };

		props.changeHeader("back");

		props.changeLoad(true);

		props.getNote(this.props.match.params.id).then(() => {
			props.changeLoad(false);
			this.setState({ note: props.note });
		});

		this.onSubmit = formValues => {
			props.editNote(this.props.match.params.id, formValues).then(() => {
				props.history.push("/");
			});
		};
	}

	componentWillUnmount() {
		this.props.clearNote();
		this.props.equalTag([]);
	}

	render() {
		const { note } = this.props;

		if (!note) return <div></div>;
		if (Object.keys(note).length === 0) return <div></div>;

		return <NoteForm onSubmit={this.onSubmit} note={note}></NoteForm>;
	}
}

const mapStateToProps = state => {
	return state.note;
};

export default connect(mapStateToProps, {
	getNote,
	editNote,
	clearNote,
	changeHeader,
	changeLoad,
	equalTag
})(NoteEdit);
