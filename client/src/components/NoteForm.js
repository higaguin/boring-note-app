import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInput, renderTextArea } from "../utils/formRenders";

class NoteForm extends React.Component {
	constructor(props) {
		super(props);

		this.submit = values => {
			props.onSubmit({
				title: values.title,
				text: values.note
			});
		};
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.submit)} className="form">
				<Field name="title" type="text" label="Title" component={renderInput} />
				<Field name="note" label="Note" component={renderTextArea} />
				<button className="btn btn--primary" type="submit">
					Save Note
				</button>
			</form>
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

export default reduxForm({ form: "formValidation", validate })(NoteForm);
