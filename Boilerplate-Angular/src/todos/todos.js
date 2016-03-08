import _ from 'lodash';

export default function($scope, todoFactory) {

	let params = {
		createHasInput: false
	}

	console.log(todoFactory.createTask);

	$scope.todos = [
	{
		task: 'Angular',
		isCompleted: true,
		isEditing: false
	},
	{
		task: 'React',
		isCompleted: false,
		isEditing: false
	},
	{
		task: 'property',
		isCompleted: true,
		isEditing: false
	}
	];

	const { onCompletedClick, watchCreateTaskInput, createTask, onEditClick, updateTask, deleteTask } = todoFactory;

	$scope.onCompletedClick = _.partial(onCompletedClick);
	$scope.$watch('createTaskInput', _.partial(watchCreateTaskInput, params, $scope));
	$scope.createTask = _.partial(createTask, $scope, params);
	$scope.onEditClick = _.partial(onEditClick);
	$scope.updateTask = _.partial(updateTask);
	$scope.deleteTask = _.partial(deleteTask, $scope);

	//_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	// remove^ ^arry to iterate ^prop to find ^if task matched task captured by todoToDelete preform_.remove

	//todoToDelete.task is made when deleteTask function is clicked see line 128, the deleteTask(todo) makes the todoToDelete object
	// Task is most unique key/id at this point but if multiple objects have same property, BUG!

	//Factories are services that scale out data.

}