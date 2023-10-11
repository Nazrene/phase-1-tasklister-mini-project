document.addEventListener("DOMContentLoaded", () => {
  
const tasks = [
  {description: 'Record stock' },
  { description: 'Order purchase' },
  { description: 'Inventory' },
  { description: 'Balance books' }
]; 

form.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const taskDescription = document.getElementById('new-task-description').value;
  
});
const tasksList = document.getElementById('tasks-list'); 

function displayTasks() {
  
  tasksList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${task.description}`; 
    tasksList.appendChild(listItem); 
  });
}
 displayTasks(); 
 
document.querySelector('h2').addEventListener('click', displayTasks);



});
