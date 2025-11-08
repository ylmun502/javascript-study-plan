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
        if (task.completed) {
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
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("myTodoTasks", JSON.stringify(tasks));
}

function loadTask() {
    const storedTask = localStorage.getItem("myTodoTasks");
    if (storedTask) {
        tasks = JSON.parse(storedTask);
    }
    renderTasks();
}

addTaskButton.addEventListener("click", () => {
    let taskText = inputField.value;
    if (taskText === "") {
        alert("Please input a task");
    } else {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
    }
    renderTasks();
    inputField.value = "";
    inputField.focus();
});

loadTask();
