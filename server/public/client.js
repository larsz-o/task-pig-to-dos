console.log('js');

const taskApp = angular.module('taskApp', []);
taskApp.controller('TaskController', function($http){
    let vm = this; 
    vm.taskList = [];

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