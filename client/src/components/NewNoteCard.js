import React from "react";

class NewNoteCard extends React.Component {
	render() {
		return (
			<div className="add-note" onClick={this.props.onClickNew}>
				<i className="fa fa-plus"></i>
				<span>New Note Card</span>
			</div>
		);
	}
}

export default NewNoteCard;
