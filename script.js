let taskList = [];

function addTask(){
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    if(task !== ''){
        taskList.push(task);
        console.log(taskList);
        taskInput.value = '';
    }
    updateTaskList();
}

function removeTask(){
    taskList.pop();
    console.log(taskList);
    updateTaskList();
}

function updateTaskList(){
    const taskListUI = document.getElementById("taskList");
    taskListUI.innerHTML = '';
    taskList.forEach((task,index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${task}`;
        listItem.setAttribute("class", "list-group-item col-12 m-2");
        listItem.setAttribute("id", "listItem");
        taskListUI.appendChild(listItem);
    });
}