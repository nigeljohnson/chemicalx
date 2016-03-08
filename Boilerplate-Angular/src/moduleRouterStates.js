// Import Angular
import angular from 'angular'
// Import Routing Function
import uiRouter from 'angular-ui-router'
// Import Controller -- Like React import child/dumb component
import todosController from 'todos/todos'
// Import Factory
import todoFactory from 'factories/todo-factory'
// Initialize Module // Assign Factory to Module as dependency
const app = angular.module('app', [uiRouter, todoFactory.name]);


// Configure Routes to module
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {

	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('todos', {
			name: '',
			url: '/',
			template: require('todos/todos.html'),
			controller: todosController
		})
		.state('about', {
			name: 'about',
			url: '/about',
			template: require('about/about.html')
		})
		.state('nested', {
			name: 'nested',
			url: '/nested',
			template: require('about/nested.html')
		})

		// Remove Path in Url (Clean Up)
		$locationProvider.html5Mode(true);
});

//Exporting App like -- React Parent component
export default app;