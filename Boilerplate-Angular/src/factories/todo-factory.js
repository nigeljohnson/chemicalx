import angular from 'angular';

import _ from 'lodash';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
	//Create function caches in factory
	function onCompletedClick(todo) {
		todo.isCompleted = !todo.isCompleted;
	}

	//Create function caches in factory
	function createTask($scope, params) {
		params.createHasInput = false;
		$scope.createTaskInput = '';
	}

	//Update function caches in factory
	function updateTask(todo) {
		todo.task = todo.updatedTask;
		todo.isEditing = false;
	}

	//Delete function caches in factory
	function deleteTask($scope, todoToDelete) {
		_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	}

	//Delete function caches in factory
	function watchCreateTaskInput(params, $scope, val) {

		// Const caching
		const createHasInput = params.createHasInput;

		if (val && !params.createHasInput) {
			$scope.todos.push({ task: val, isCompleted: false });
			params.createHasInput = true;
		} 

		else if (val && params.createHasInput) {
			$scope.todos[$scope.todos.length - 1].task = val;
		}

		if(!val && params.createHasInput) {
			$scope.todos.pop();
			params.createHasInput = false;
		}

	}

	//onEditClick function caches in factory
	function onEditClick(todo) {
		todo.isEditing = !todo.isEditing;
		todo.updatedTask = todo.task;
	}

	//Fuctions returned for export
	return {
		createTask,
		updateTask,
		deleteTask,
		watchCreateTaskInput
	};
});

export default todoFactory;