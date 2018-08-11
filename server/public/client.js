const taskApp = angular.module('taskApp', []);
taskApp.controller('taskController', function($http){
    let vm = this; 
    vm.taskList = [];
})