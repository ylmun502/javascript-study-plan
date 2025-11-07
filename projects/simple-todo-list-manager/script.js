let tasks = [];
let inputField = document.getElementById("new-task-input");
let addTaskButton = document.getElementById("add-task-button");
let todoList = document.getElementById("todo-list");

function renderTasks() {
    todoList.innerHTML = "";
    for (let task of tasks) {
        const newLiTag = document.createElement("li");
        newLiTag.textContent = `${task}`;
        todoList.appendChild(newLiTag);
    }
}

addTaskButton.addEventListener("click", () => {
    let task = inputField.value;
    if (task === "") {
        alert("Please input a task");
    } else {
        tasks.push(task);
    }
    renderTasks();
    inputField.value = "";
    inputField.focus();
})