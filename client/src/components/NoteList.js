import React from "react";
import moment from "moment";

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNotes(notes) {
    if (notes.length <= 0) return [];

    return notes.map(note => {
      return (
        <div className="note-element" key={note._id}>
          <div className="note-element__title">{note.title}</div>
          <div className="note-element__text">{note.text}</div>
          <div className="note-footer">
            <div className="note-footer__created">
              {moment(note.created).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { notes } = this.props;
    // console.log(notes);

    return <div className="list-container">{this.renderNotes(notes)}</div>;
  }
}

export default NoteList;
