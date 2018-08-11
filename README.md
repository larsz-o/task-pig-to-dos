# Weekend Challenge 3
A full-stack 'To Do' application

# BASE MODE
- [x] Create a README.md 
- [x] Set up front end files (index.html, styles.css)
- [x] Source in angular.js
- [x] Set up client.js with Angular
- [x] Install Express 
- [x] Install Mongoose
- [x] Set up the server
- [x] Set up a database in MongoDB in server.js and connect it to the project
- [x] Write a Schema for data 
- [] Make at least 15 commits
- [x] Using AngularJS, create a front end experience that allows a user to create a task.
    - [x] Create a form for tasks
    - [x] Create containers for tasks and a pig to appear 
    - []including a category 
    - [x] Create a POST route to the server
- [x] When the task is created, it should be stored inside of a database (MongoDB)
    - [x] Send the POSTed data to Mongo 
- [x] Whenever a task is created the front end should refresh to show all tasks that need to be completed
    - [x] Make a GET request for all tasks 
    - [x] Create an ng-repeat to append all tasks to the DOM, run getTasks after the POST route to update the list
- [] Each task should have an option to 'Complete' or 'Delete'.
    - [x] Create buttons for deleting tasks
    - [x] Create button for marking task as complete 
    - [x] Send PUT request to the server to edit the values of that task in the database
    (Whether or not a task is complete should also be stored in the database.)
    - [x] Send DELETE request to the server to delete a task from the database
    (Deleting a task should remove it both from the Front End as well as the Database.)
- [] When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete. ng-class will come in handy!)
- [] Edit CSS: 
    - [] Background color of the page
    - [] font family and size
    - [] text color &or background color of tasks to show whether or not they have been completed

# STRETCH GOALS
- [x] Implement Bootstrap to take the visuals of the page up a notch.
- [] In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interpret this however you would like.
    - [] Try out SweetAlert 
- [x] Move the inputs into a form and use ng-submit so that the user can hit enter to add a new task.
- [] Add front-end validation to the 'make-a-task' form.
- [x] Add a category field for the task. Allow users to filter by task category.
- [] Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.
