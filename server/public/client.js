const taskApp = angular.module('taskApp', []);
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
        if (confirm('Are you sure you want to delete this task?')){
            $http({
                method: 'DELETE', 
                url: '/tasks/' + taskID
            }).then(function(response){
                getTasks();
            }).catch(function(error){
                alert('Unable to remove task');
                console.log(error); 
            });
        }
    }

    vm.submitTasks = function(){
        let newTask = {
            task: vm.taskIn,
            category: vm.categoryIn,
            complete: false
        }
        $http({
            method: 'POST',
            url: '/tasks',
            data: newTask
        }).then(function(response){
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
            vm.taskList = response.data; 
            vm.taskIn = '';
            vm.categoryIn = '';
            vm.searchCategory = '';
        }).catch(function(error){
            alert('Unable to get tasks from the server');
            console.log(error);
        });
    } 

    getTasks(); 
})