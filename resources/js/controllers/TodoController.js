
var TodoController = function ($scope, $http, TaskManagerFactory) {
    $scope.errorObj = '';
    $scope.getAllTodos = function () {
        TaskManagerFactory.getAllTasks().then(function (response) {
            $scope.todos = response;
        }, function (response) {
            $scope.setError('An unexpected error has ocurred');
        });
    }

    $scope.addTodo = function (newTask) {

        var params = {}
        params.taskName = newTask;
        params.grpId = 1;
        TaskManagerFactory.addTask(params).then(function (response) {
            $scope.getAllTodos();
        }, function (response) {
            $scope.setError('An unexpected error has ocurred');
        });
        $scope.todoName = '';
    }

    $scope.deleteTodo = function (taskToDelete) {
        TaskManagerFactory.deleteTask(taskToDelete).then(function (response) {
            $scope.getAllTodos();
        }, function (response) {
            $scope.errorObj = $scope.setError('An unexpected error has ocurred');
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
            $scope.errorObj = $scope.setError('An unexpected error has ocurred');
        });
    }
    $scope.resetTodoField = function () {
        $scope.resetError();
        $scope.todoName = '';
        $scope.editMode = false;
    };

    $scope.resetError = function () {
        $scope.error = false;
        $scope.errorMessage = '';
    };
    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };


    $scope.getAllTodos();
}