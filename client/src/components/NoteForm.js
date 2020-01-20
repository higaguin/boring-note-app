import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInput, renderTextArea } from "../utils/formRenders";
import TagList from "./TagList";
import { connect } from "react-redux";

class NoteForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { tags: [] };

		this.submit = values => {
			props.onSubmit({
				title: values.title,
				text: values.note,
				tags: this.props.tag.tag_collection.map(tag => tag._id)
			});
		};
	}

	render() {
		const { note, tags } = this.props;
		console.log(tags);

		return (
			<>
				<TagList tags={tags}></TagList>
				<form onSubmit={this.props.handleSubmit(this.submit)} className="form">
					<Field
						name="title"
						type="text"
						label="Title"
						component={renderInput}
					/>
					<Field name="note" label="Note" component={renderTextArea} />
					<button className="btn btn--primary" type="submit">
						Save Note
					</button>
				</form>
			</>
		);
	}
}

const validate = values => {
	const errors = [];

	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length > 30) {
		errors.title = "It's too long";
	} else if (values.title.trim() === "") {
		errors.title = "Text is required";
	}

	if (!values.note) {
		errors.note = "Required";
	} else if (values.note.trim() === "") {
		errors.note = "Text is required";
	}

	return errors;
};

const mapStateToProps = state => {
	return {
		tag: state.tag,
		initialValues: {
			title: state.note.note.title,
			note: state.note.note.text
		},
		tags: state.note.note.tags
	};
};

export default connect(
	mapStateToProps,
	{}
)(
	reduxForm({
		form: "formValidation",
		validate
	})(NoteForm)
);
