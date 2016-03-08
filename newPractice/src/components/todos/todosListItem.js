import React from 'react';

export default class TodosListItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

			isEditing: false
		};

	};

	//1. Green Red, Dynamic Styling
	renderTaskSection() {
		// Now we can use objects properies in this.props as variables now
		const { task, isCompleted } = this.props;
		console.log(this.props);

		// Dynamic Styling Logic
		const taskStyle = {
			// Set Color Dynamically, if isCompleted is true/false
			color: isCompleted ? /* if true */ 'green' : /* if false */ 'red',
			cursor: 'pointer',

		};

		if (this.state.isEditing) {
			return(
				<td>
					<form onSubmit="{this.onSaveClick.bind(this)}">
						<input type="text" devaultVaule={task} ref="editInput" />
						</form>
				</td>
				);
		}

		return(

			//onClick handler for todosListItem
			//modify arry in app.js, by accessing another method in app.js
			<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>

			);
	}

	renderActionSection() {
		if (this.state.isEditing) {
			return (

				<td>
					<button onClick={this.onSaveClick.bind(this)}> Save </button>
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
				{this.renderTaskSection()}
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

	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		this.props.saveTask(oldTask, newTask);
		this.setState({ isEditing: false });
	}

}