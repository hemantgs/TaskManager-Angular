'use strict';

var TaskManager = {};

var App = angular.module('TaskManager', ['TaskManager.filters', 'TaskManager.service', 'TaskManager.directives', 'ui.bootstrap','ui.router','nvd3']);

// Declare app level module which depends on filters, and service
App.config (function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('todo', {
            url : '/todo',          
            templateUrl: 'html/todo/layout.html',
            controller: TodoController
    }).state('taskDetail', {
            url:'/taskDetail',
        templateUrl: 'html/detail/task-detail.html',
            params:{taskObj:null},
        controller: TaskDetailController
    }).state('dashboard',{
            url : '/dashboard',          
            templateUrl: 'html/dashboard/dashboard.html',
            controller: DashboardController
        });
    $urlRouterProvider.otherwise('/todo');
});


