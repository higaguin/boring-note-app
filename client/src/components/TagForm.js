import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInput, renderTextArea } from "../utils/formRenders";

class TagForm extends React.Component {
	constructor(props) {
		super(props);

		this.submit = values => {
			props.onSubmit(values);
		};
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.submit)} className="form">
				<Field name="title" type="text" label="Title" component={renderInput} />
				<button className="btn btn--naked" type="submit">
					Save Tag
				</button>
			</form>
		);
	}
}

const validate = values => {
	const errors = [];

	if (!values.title) {
		errors.title = "Required";
	} else if (values.title.length > 15) {
		errors.title = "It's too long";
	}

	return errors;
};

export default reduxForm({ form: "formTag", validate })(TagForm);
