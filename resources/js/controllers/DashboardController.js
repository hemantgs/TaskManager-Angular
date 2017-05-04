var DashboardController = function($scope, $http){
    
    $scope.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30,
            
        },
        yDomain: [0,24]
    }
};
    
    
    
    
    $scope.buildGraphData = function(){
        var task =$scope.selectedTask
        
        $http.post('http://localhost:8080/CodeChallenge/getDashBoardData',task).then(function(response){
            $scope.graphData = response.data;
            console.log(graphData);
            $scope.data = [{
    key: "Cumulative Return",
    values: [
        { "label" : "Day 1" , "value" : graphData[0] },
        { "label" : "Day 2" , "value" : graphData[1] },
        { "label" : "Day 3" , "value" : graphData[2] },
        { "label" : "Day 4" , "value" : graphData[3] },
        { "label" : "Day 5" , "value" : graphData[4] },
        { "label" : "Day 6" , "value" : graphData[5] },
        { "label" : "Day 7" , "value" : graphData[6] },
        
        ]
    }]
        }, function(response){
            
        });
        
    }
    
    
    $scope.getAllTodos = function(){
        
       
        var dat=[];
        $http.post('http://localhost:8080/CodeChallenge/getTaskList',dat).then(function(response){
            console.log(response.data.taskList);
            $scope.todos = response.data.taskList;
            
        }, function(response){
            
        });
        
        
    }
    $scope.getAllTodos();
}