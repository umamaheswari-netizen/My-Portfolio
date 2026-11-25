function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerText = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(deleteBtn);
        tasklist.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

// Load tasks on page load
displayTasks();
    