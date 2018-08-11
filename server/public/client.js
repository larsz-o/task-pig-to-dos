console.log('js');

const taskApp = angular.module('taskApp', ['ng-sweet-alert']);
taskApp.controller('TaskController', function($http){
    let vm = this; 
    vm.taskList = [];

    //function expressions 
    vm.completeTask = function(taskID){
        $http({
            method: 'PUT', 
            url: '/tasks/complete/' + taskID
        }).then(function(response){
            getTasks();
        }).catch(function(error){
            alert('Unable to complete task');
            console.log(error);
        });
    }
    vm.deleteTask = function(taskID){
       $http({
           method: 'DELETE', 
           url: '/tasks/' + taskID
       }).then(function(response){
           console.log('Task deleted');
           getTasks();
       }).catch(function(error){
           alert('Unable to remove task');
           console.log(error); 
       });
    }
    vm.submitTasks = function(){
        let newTask = {
            task: vm.taskIn,
            complete: false
        }
        $http({
            method: 'POST',
            url: '/tasks',
            data: newTask
        }).then(function(response){
            console.log('success!', response.data);
            getTasks(); 
        }).catch(function(error){
            alert('Unable to add task');
            console.log(error);
        });
    }
    //function declarations
    function getTasks(){
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function(response){
            console.log('Back from the server with', response.data);
            vm.taskList = response.data; 
        }).catch(function(error){
            alert('Unable to get tasks from the server');
            console.log(error);
        });
    }


    getTasks(); 
})