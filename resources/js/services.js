'use strict';

/* Services */

var AppServices = angular.module('TaskManager.service', ['TaskManager.RestCallService']);



AppServices.factory('TaskManagerFactory', taskManagerFactory);

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
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/getTaskList', {}).then(function (data) {
            obj = data.taskList;
            return data.taskList;
        }, function (data) {
            return data;
        });

    }

    function addTask(params) {
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/addTask', params).then(function (response) {
            return
        });
    }

    function deleteTask(taskTobeDeleted) {
        var params = {}
        params.taskId = taskTobeDeleted;
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/deleteTask', params).then(function (response) {

        });
    }
    function toggleTaskStatus(task) {
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/toggleStatus', task).then(function (response) {
            return;
        });
    }
    function getAllTaskData() {
        return obj;
    }

    function addTaskDur(params) {
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/addTaskDuration', params).then(function (response) {
            return;
        });
    }

    function getTaskDur(params) {
        return RestCallService.makeRestCall('http://localhost:8080/CodeChallenge/getTaskDetails', params).then(function (response) {
            return response;
        })
    }
}



