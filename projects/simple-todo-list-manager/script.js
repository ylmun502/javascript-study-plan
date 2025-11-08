const tasks = [];
const inputField = document.getElementById("new-task-input");
const addTaskButton = document.getElementById("add-task-button");
const todoList = document.getElementById("todo-list");

function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
        const newLiTag = document.createElement("li");
        const deleteButton = document.createElement("button");
        newLiTag.textContent = `${task}`;
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });
        newLiTag.appendChild(deleteButton);
        todoList.appendChild(newLiTag);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
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