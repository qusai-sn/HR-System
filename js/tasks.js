const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const employeeNameSelect = document.getElementById("employeeName");

// Load stored tasks
loadTasks();

// Load employees from JSON file
loadEmployees();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const employeeName = document.getElementById("employeeName").value;
  const taskTitle = document.getElementById("taskTitle").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("dueDate").value;
  const taskId = generateTaskId();

  const task = {
    taskId,
    taskTitle,
    taskDescription,
    dueDate,
    assignedTo: employeeName
  };

  saveTask(task);
  displayTask(task);
  taskForm.reset();
});

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
  const tasks = getTasks();
  tasks.forEach((task) => displayTask(task));
}

function displayTask(task) { // we'll style the tasks here
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `Name: ${task.assignedTo}, Task Title: ${task.taskTitle}, Due: ${task.dueDate}, Description: ${task.taskDescription}`;
  taskList.appendChild(li);
}

function loadEmployees() {
  const response = localStorage.getItem('employees');
  console.log(response);
  const data = JSON.parse(response);
  console.log(data);
  data.forEach((employee) => displayEmployee(employee.name));
}

function displayEmployee(name) {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  employeeNameSelect.appendChild(option);
}
function generateTaskId() {
  const tasks = getTasks();
  return tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 1;
}


// localStorage.clear();
 