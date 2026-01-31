const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `
    <strong>${taskInput.value}</strong>
    <div class="task-time">${taskTime.value || "No date set"}</div>
  `;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskInput.value);
    if (newTask) {
      taskInfo.querySelector("strong").innerText = newTask;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(taskInfo, actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}
