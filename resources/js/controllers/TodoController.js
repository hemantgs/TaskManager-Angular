
var TodoController = function ($scope, $http, TaskManagerFactory) {

    $scope.getAllTodos = function () {
        TaskManagerFactory.getAllTasks().then(function (response) {
            $scope.todos = response;
        });
    }

    $scope.addTodo = function (newTask) {

        var params = {}
        params.taskName = newTask;
        params.grpId = 1;
        TaskManagerFactory.addTask(params).then(function (response) {
            $scope.getAllTodos();
        });
        $scope.todoName = '';
    }

    $scope.deleteTodo = function (taskToDelete) {
        TaskManagerFactory.deleteTask(taskToDelete).then(function (response) {
            $scope.getAllTodos();
        });
    }

    $scope.toggleStatus = function (task) {
        if (todo.status === 0) {
            todo.status = 1;
        }
        else {
            todo.status = 0;
        }
        TaskManagerFactory.toggleTaskStatus(task).then(function (response) {
            $scope.getAllTodos();
        }, function () {
        });
    }
    $scope.getAllTodos();
}