var TaskDetailController = function($scope, $http,$stateParams){
    $scope.taskDetail ={};
    $scope.startTime = 0 ;
    $scope.endTime = 0;
    
    $scope.addDuration = function()
    {   var params = {}
        params.startTimeString=$scope.startTime;
        params.endTimeString = $scope.endTime;
        params.taskId = $scope.taskDetail.taskId;
        $http.post('http://localhost:8080/CodeChallenge/addTaskDuration',params).then(function(response){
            console.log(response.data.taskList);
            $scope.getDurations();
            $scope.startDate = 0 ;
            $scope.endDate = 0;
            
        }, function(response){
            
        });
    }
    
    $scope.getDurations = function(){
        var params = $stateParams.taskObj
        $http.post('http://localhost:8080/CodeChallenge/getTaskDetails',params).then(function(response){
            console.log(response.data);
            $scope.taskDetail = response.data;
            
        }, function(response){
            
        });
    }
    
    
    
    $scope.getDurations();
}