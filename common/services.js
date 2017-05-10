'use strict';

/* Services */

var AppServices = angular.module('TaskManager.service', ['TaskManager.RestCallService']);


AppServices.factory('TaskManagerFactory',['RestCallService', taskManagerFactory]);

function taskManagerFactory(RestCallService) {
    var obj = {};
    return {
        getAllTasks: getAllTasks,
        addTask: addTask,
        deleteTask: deleteTask,
        toggleTaskStatus: toggleTaskStatus,
        getAllTaskData: getAllTaskData,
        addTaskDur: addTaskDur,
        getTaskDur: getTaskDur

    };
    function getAllTasks() {
        return RestCallService.makeRestCall('/CodeChallenge/getTaskList', {}).then(function (data) {
            obj = data.taskList;
            return data.taskList;
        }, function (error) {
            return error;
        });

    }

    function addTask(params) {
        return RestCallService.makeRestCall('/CodeChallenge/addTask', params).then(function (response) {
            return
        });
    }

    function deleteTask(taskTobeDeleted) {
        var params = {}
        params.taskId = taskTobeDeleted;
        return RestCallService.makeRestCall('/CodeChallenge/deleteTask', params).then(function (response) {

        });
    }

    function toggleTaskStatus(task) {
        return RestCallService.makeRestCall('/CodeChallenge/toggleStatus', task).then(function (response) {
            return;
        });
    }

    function getAllTaskData() {
        return obj;
    }

    function addTaskDur(params) {
        return RestCallService.makeRestCall('/CodeChallenge/addTaskDuration', params).then(function (response) {
            return;
        });
    }

    function getTaskDur(params) {
        return RestCallService.makeRestCall('/CodeChallenge/getTaskDetails', params).then(function (response) {
            return response;
        })
    }
}



