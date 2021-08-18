const ul = document.getElementById('list-items');
// const oldTasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(oldTasks);
const incompleteTasks = [];
const completedTasks = [];

export const sorted = () => {
  getTasks.forEach(function(task){
    if(task.isComplete) {
      completedTasks.push(task);
    }
    else {
      incompleteTasks.push(task);
    }
  })
  console.log(incompleteTasks);
}