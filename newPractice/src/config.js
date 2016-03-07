/*	
	Using lodash to iterate through array

	.map creates new arry, to customize - > this.prop.todos (arry)

	for each todos item where going to create a new TodosListItem
	with a key matching the index (since they don't have and ID.)

	renderItems() {
		return _.map(this.prop.todos, (todo, index) =>
			<TodosListItem key={index} {...todo} />);
	}

	(todo, index) =><TodosListItem key={index} {...todo} />);

	SAME AS

	function(todo, index) {
		<TodosListItem />
	}

	ES6 Spreading
	{...todo}

	SAME AS
	task={todo.task} isCompleted={todo.isCompleted}