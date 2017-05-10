App.controller('TaskDetailController', ['$scope', '$http', '$stateParams', 'TaskManagerFactory', function ($scope, $http, $stateParams, TaskManagerFactory) {
    $scope.taskDetail = {};
    $scope.startTime = 0;
    $scope.endTime = 0;

    $scope.addDuration = function () {
        var params = {};
        params.startTimeString = $scope.startTime;
        params.endTimeString = $scope.endTime;
        params.taskId = $scope.taskDetail.taskId;
        TaskManagerFactory.addTaskDur(params).then(function (response) {
            $scope.getDurations();
            $scope.startDate = 0;
            $scope.endDate = 0;

        }, function (response) {

        });
    };

    $scope.getDurations = function () {
        var params = $stateParams.taskObj;
        TaskManagerFactory.getTaskDur(params).then(function (response) {

            $scope.taskDetail = response;

        }, function (response) {

        });
    };


    $scope.getDurations();
}]);