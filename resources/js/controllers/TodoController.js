/**
 * Created by tmichels on 8/1/14.
 */

var TodoController = function($scope, $http){

    $scope.editMode = false;
    $scope.position = '';
    //$scope.todos =["Write better code","Watch star wars again!!!","assa"];
    $scope.getAllTodos = function(){
        $scope.resetError();
       
        var dat=[];
        $http.post('http://localhost:8080/CodeChallenge/getTaskList',dat).then(function(response){
            console.log(response.data.taskList);
            $scope.todos = response.data.taskList;
            
        }, function(response){
            
        });
        
        
    }

    $scope.addTodo = function(newTodo){
        $scope.resetError();
        var params = {}
        params.taskName = newTodo;
        params.grpId =1;
        $http.post('http://localhost:8080/CodeChallenge/addTask', params).then(function(response){
            $scope.getAllTodos();
        },function() {
            $scope.setError('Could add todo');
        });
        $scope.todoName = '';
    }

    $scope.deleteTodo = function(deleteTodo){
        $scope.resetError();
        var params = {}
        params.taskId=deleteTodo;
        $http.post('http://localhost:8080/CodeChallenge/deleteTask',params).then(function(response){
            $scope.getAllTodos();
            
        },function() {
            $scope.setError('Could not delete todo');
        });
    }

    $scope.deleteAllTodo = function(){
        $scope.resetError();
        $http.delete('todo/deleteAll').success(function(response){
            $scope.getAllTodos();
        }).error(function() {
            $scope.setError('Could not delete all todos');
        })
    }

    $scope.editTodo = function(position, todo){
        $scope.resetError();
        $scope.todoName = todo;
        $scope.position = position;
        $scope.editMode = true;
    }

    $scope.updateTodo = function(updateTodo){
        $scope.resetError();
        $http.put('todo/update/'+ $scope.position +'/'+updateTodo).success(function(response){
            $scope.getAllTodos();
            $scope.position = '';
            $scope.todoName = '';
            $scope.editMode = false;
        }).error(function(){
            $scope.setError('Could not update todo');
         })
    }

    $scope.resetTodoField = function() {
        $scope.resetError();
        $scope.todoName = '';
        $scope.editMode = false;
    };

    $scope.resetError = function() {
        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.setError = function(message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };
    $scope.toggleStatus = function(todo){
        if(todo.status===0){
            todo.status=1;
        }
        else{
            todo.status=0;
        }
         $http.post('http://localhost:8080/CodeChallenge/toggleStatus', todo).then(function(response){
            $scope.getAllTodos();
        },function() {
            $scope.setError('Could add todo');
        });
    }
    $scope.getAllTodos();
}