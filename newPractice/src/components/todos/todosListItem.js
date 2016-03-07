import React from 'react';

export default class TodosListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

			isEditing: false
		};

	};

	renderActionSection() {
		if (this.state.isEditing) {
			return (

				<td>
					<button> Save </button>
					<button onClick={this.onCancelClick.bind(this)}> Cancel </button>
				</td>

				);
		} 

			return (
				<td>
					<button> Delete </button>
					<button onClick={this.onEditClick.bind(this)}> Edit </button>
				</td>

				);
	}

	render() {
		return (
			<tr>
				<td>{this.props.task}</td>
				{this.renderActionSection()}
			</tr>
			);
	}

	onEditClick() {
		this.setState({

			isEditing: true 
		});

	}

	onCancelClick() {
		this.setState({

			isEditing: false 
		});

	}

}