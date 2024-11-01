var taskInput = document.getElementById("task-input");
var addTaskBtn = document.getElementById("add-task-btn");
var taskList = document.getElementById("task-list");
var clearAllBtn = document.getElementById("clear-all-btn");

addTaskBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAll);

function addTask() {
  var taskText = taskInput.value.trim();
  if (taskText) {
    var task = document.createElement("li");
    task.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;
    taskList.appendChild(task);
    taskInput.value = "";
  }
}

function removeTask(element) {
  element.parentElement.remove();
}

function clearAll() {
  taskList.innerHTML = "";
}
