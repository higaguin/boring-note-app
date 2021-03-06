import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { removeNote, getNotes, changeLoad } from "../actions";

class NoteList extends React.Component {
	constructor(props) {
		super(props);

		this.onClickEdit = noteId => {
			props.history.push(`/note/edit/${noteId}`);
		};

		this.onClickRemove = noteId => {
			props.removeNote(noteId);
		};
	}

	renderNotes(notes, mode) {
		if (notes.length <= 0) return [];

		const renderIcon = (id, mode) => {
			if (mode !== "delete") {
				return (
					<i
						className="fa fa-pencil note-element__edit animated fadeIn faster"
						onClick={() => this.onClickEdit(id)}
					></i>
				);
			} else {
				return (
					<i
						className="fa fa-times note-element__edit animated fadeIn faster"
						onClick={() => this.onClickRemove(id)}
					></i>
				);
			}
		};

		return notes.map(note => {
			return (
				<div className="note-element" key={note._id}>
					{renderIcon(note._id, mode)}
					<div className="note-element__title animated fadeIn faster">
						{note.title}
					</div>
					<div className="note-element__text animated fadeIn faster delay-1">
						{note.text}
					</div>
					<div className="note-footer animated fadeIn faster delay-2">
						<div className="note-footer__created">
							{moment(note.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}
						</div>
					</div>
				</div>
			);
		});
	}

	componentDidMount() {
		this.props.changeLoad(true);
		this.props.getNotes().then(() => {
			this.props.changeLoad(false);
			this.setState({ notes: this.props.note.notes });
		});
	}

	render() {
		const { note, general } = this.props;
		if (!note.notes) return <div></div>;
		const elements = document.getElementsByClassName("note-element__edit");

		if (elements.length > 0) {
			for (let index in elements) {
				if (index !== "length" && index !== "item" && index !== "namedItem") {
					let element = elements[index];
					element.addEventListener("animationend", function() {
						element.classList.remove("animated", "fadeIn");
					});
				}
			}
		}

		return (
			<div className="list-container">
				{this.renderNotes(note.notes, general.mode)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { general: state.general, note: state.note };
};

export default connect(mapStateToProps, { removeNote, getNotes, changeLoad })(
	NoteList
);
