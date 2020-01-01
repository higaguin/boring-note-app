import React from "react";
import NewNoteCard from "./NewNoteCard";
import NoteList from "./NoteList";
import { connect } from "react-redux";
import { getNotes } from "../actions";

class NotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
    this.props.getNotes().then(() => {
      this.setState({ notes: this.props.notes });
    });
  }

  render() {
    return (
      <div className="main-container">
        <div>
          <NewNoteCard />
        </div>
        <div>
          <NoteList notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.note;
};

export default connect(mapStateToProps, { getNotes })(NotePage);
