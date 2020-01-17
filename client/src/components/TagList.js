import React from "react";
import TagForm from "./TagForm";
import { connect } from "react-redux";
import { createTag, checkTag, addTag } from "../actions";

class TagList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isNew: false };

		this.handleClick = () => {
			this.setState({ isNew: true });
		};

		this.submitTag = formValues => {
			props.checkTag(formValues.title).then(() => {
				if (!this.props.checked_tag) {
					props.createTag(formValues).then(tag => {
						props.addTag(this.props.created_tag);
						this.setState({ isNew: false });
					});
				} else {
					let tags = this.props.tag_collection;

					if (!tags.some(tag => tag._id === this.props.checked_tag._id)) {
						props.addTag(this.props.checked_tag);
						this.setState({ isNew: false });
					}

					this.setState({ isNew: false });
				}
			});
		};
	}

	renderTags(tags) {
		if (!tags) return [];
		if (tags.length <= 0) return [];

		return tags.map(tag => {
			return (
				<div className="tag-element" key={tag._id}>
					<i className="fa fa-times"></i>
					<span>{tag.title}</span>
				</div>
			);
		});
	}

	render() {
		const { tag_collection } = this.props;
		console.log(this.props);

		let newComponent;
		if (this.state.isNew) {
			newComponent = (
				<div className="tag-form-container">
					<TagForm onSubmit={this.submitTag}></TagForm>
				</div>
			);
		} else {
			newComponent = (
				<>
					<div
						className="tag-element tag-element--new"
						onClick={this.handleClick}
					>
						<i className="fa fa-plus"></i>
						<span>New Tag</span>
					</div>
					{this.renderTags(tag_collection)}
				</>
			);
		}

		return <div className="tag-list">{newComponent}</div>;
	}
}

const mapStateToProps = state => {
	return state.tag;
};

export default connect(mapStateToProps, { createTag, checkTag, addTag })(
	TagList
);
