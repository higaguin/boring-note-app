import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderInput, renderTextArea } from "../utils/formRenders";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)} className="form">
        <Field name="title" type="text" label="Title" component={renderInput} />
        <Field name="note" label="Note" component={renderTextArea} />
        <button type="submit">Save Note</button>
      </form>
    );
  }

  submit(values) {}
}

export default reduxForm({ form: "formValidation" })(NoteForm);
