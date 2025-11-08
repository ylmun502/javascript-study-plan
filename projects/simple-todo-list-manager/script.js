let tasks = [];
const inputField = document.getElementById("new-task-input");
const addTaskButton = document.getElementById("add-task-button");
const todoList = document.getElementById("todo-list");

function renderTasks() {
    todoList.innerHTML = "";
    tasks.forEach((task, index) => {
        const newLiTag = document.createElement("li");
        const deleteButton = document.createElement("button");
        newLiTag.textContent = `${task.text}`;
        if(task.completed) {
            newLiTag.classList.add("completed-task");
        }
        newLiTag.addEventListener(("click"), () => {
            toggleComplete(index);
        })
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });
        newLiTag.appendChild(deleteButton);
        todoList.appendChild(newLiTag);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

addTaskButton.addEventListener("click", () => {
    let taskText = inputField.value;
    if (taskText === "") {
        alert("Please input a task");
    } else {
        tasks.push({text: taskText, completed: false});
    }
    renderTasks();
    inputField.value = "";
    inputField.focus();
})