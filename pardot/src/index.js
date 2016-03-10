const message = 'hello from index.js';
console.log(message);

import 'css/master.scss';

import angular from 'angular';
import appModule from 'moduleRouterStates';

angular.bootstrap(document, [appModule.name]);