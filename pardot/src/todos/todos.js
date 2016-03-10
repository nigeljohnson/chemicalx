import _ from 'lodash';

export default function($scope) {

	let params = {
		createHasInput: false
	}

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

	$scope.onCompletedClick = todo => {
		todo.isCompleted = !todo.isCompleted;
	};


	//Handling Input Events NG-MODEL(WATCH)
		// Respond to watch on 'createTaskInput' W/ CALLBACK FUNCTION (ES6)

	//1.Watching ng-modle "createTaskInput and placing value into val (ES6)"

	$scope.$watch('createTaskInput', val => {
		//2.if there is a value (something in NG-Model Box) if val is true/ something in box push new value, every time character is entered or deleted. ADDITIONAL CODE NEED!
		// if (val) {

				//3.push new value into todos .push method on (), {} = scope binding "Two Way"
		// 	$scope.todos.push({ task: val, isCompleted: false });
		// }

		// Improved on original ^^

		//params is made true after first input, so no longer pushes because condition of -- !params.createHasInput
		if (val && !params.createHasInput) {

			$scope.todos.push({ task: val, isCompleted: false });
			params.createHasInput = true;
		} 

		// Now Else statement - if params is true, we're going to update last todos array, "task" value to match input, update "task"

		else if (val && params.createHasInput) {

			//$scope of todos, passing number -> [] which equals length of array(number of todos) minus 1 position to target last item added into array, WHICH is the item you're currentl making. SMART!
			$scope.todos[$scope.todos.length - 1].task = val;
		}

		//If no value & params is now true because item has been made ^^^ empty ng-model,
		//POP off last item in arry "POP" if no !VAL & params is TRUE
		//If nothing in box, new array item is removed
		// ng-model input has only been watched, still need to capture ng-model and save array item
		if(!val && params.createHasInput) {
			$scope.todos.pop();
			params.createHasInput = false;

		}

		//A console log of particular object in array of objects 8D
		console.log($scope.todos[$scope.todos.length - 1]);
		console.log($scope.todos[$scope.todos.length - 1].task);


	});


	//Now to make ng-Submit Function
	// On Submit or CLick, set params to false (nothing in box)
	$scope.createTask = () => {
		// When erase input won't erase from table
		params.createHasInput = false;
		// Empty NG-Model after submit
		$scope.createTaskInput = '';
	};

	// Or

	//	$scope.createTask = () => {
	//	params.createHasInput = false; false to no "POP"
	//  $scope.todos.push($scope.createTaskInput) Push input intp arry
	//  $scope.createTaskInput = ''; make NG-model empty
	//	};

	// We've made a circumstace where input has been captured and push but never popped.
	// Val is true & params is made false. Params is true only when new input. popped off if deleted (backspace or !val)
	// params is made false while value is still entered (pushed). then create task is emptied! Genius. So now params is ready for another clean input!
	// CIRCUMSTANCUAL CAPTURE OF NEW ARRAY ITEMS


	// Now to EDIT, make current "task into input box" and save after ui change to action buttons.

	//Switch UI STATE "isEditing"

	$scope.onEditClick = todo => {
		todo.isEditing = !todo.isEditing;
		// updatedTask is an empty array until you type after click, so bug after edit then save...
		// initialize already assigned todo.task to updatedTask until typing input occurs
		todo.updatedTask = todo.task;
	}

	//ng-if Set in html, show span is !todo.isEditing;

	//Update Task

	$scope.updateTask = todo => {

		todo.task = todo.updatedTask;
		todo.isEditing = false;
	}

	// Define Delete Task
	// _. <- lodash! iterate through todo arry and remove todo clicked on. Match todo with todo clicked & remove. LODASH TIME!
	// Could be done with vanilla js but we'll use lodash (improved version of underscore, maniplate js more effienently, import lodash)
	// See lodash docs for more methods ie: _.remove <- used alot in react
	$scope.deleteTask = todoToDelete => {
		_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	};

	//_.remove($scope.todos, todo => todo.task === todoToDelete.task);
	// remove^ ^arry to iterate ^prop to find ^if task matched task captured by todoToDelete preform_.remove

	//todoToDelete.task is made when deleteTask function is clicked see line 128, the deleteTask(todo) makes the todoToDelete object
	// Task is most unique key/id at this point but if multiple objects have same property, BUG!
	
}