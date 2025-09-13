let form;
let input;
let taskList;

document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById("create-task-form");
  input = document.getElementById("new-task-description");
  taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let task = input.value.trim();
    if (task) {
      addTaskToDOM(task);
      input.value = ""; 
    }
  });
});

function addTaskToDOM(task) {
  let li = document.createElement("li");
  li.textContent = task;

  
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
