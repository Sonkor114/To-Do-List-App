document.addEventListener('DOMContentLoaded', function(){
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    //load task from localStorage
    loadTasks();

    addTaskBtn.addEventListener('click', addTasks);
    taskInput.addEventListener('keypress', function(e){
        if(e.key === 'Enter') addTasks();
    });

    function addTasks(){
        const tasktext = taskInput.ariaValueMax.trim();
        if(tasktext == '') return;

        const task = {
            id: Date.now(),
            text: tasktext,
            completed: false
        };
        let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
        tasks.push(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        randerTask(task);
        taskInput.value = '';
    }
    function loadTasks(){
        let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
        tasks.forEach(randerTask);
    }
})