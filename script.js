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
    function randerTask(task){
        const li = document.createElement('li');
        li.dataset.id = task.id;
        if(task.completed) li.classList.add('completed');
        li.innerHTML = `
        <span>${task.text}</span>
        <div>
        <button class="complete-btn"></buttom>
        <button class="delete-btn"></buttom>
        </div>
        `;
        li.querySelector('.complete-btn').addEventListener('click', toggleComplete);
        li.querySelector('.delete-btn').addEventListener('click', deleteTask);
    }
    
})