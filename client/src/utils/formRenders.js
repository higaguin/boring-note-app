import React from "react";

export const renderTextArea = ({ input, label, meta: { touched, error } }) => (
	<div>
		<textarea {...input} className="form-area" placeholder={label} rows="4" />
		{touched && error && <div className="form-error">{error}</div>}
	</div>
);

export const renderInput = ({
	input,
	label,
	type,
	meta: { touched, error }
}) => (
	<div>
		<input {...input} className="form-input" placeholder={label} type={type} />
		{touched && error && <div className="form-error">{error}</div>}
	</div>
);
