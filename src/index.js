import './style.css';

const ul = document.getElementById('list-items');
const button = document.getElementById('submit');

const tasks = [
  {
    index: 0,
    isCompleted: false,
    description: 'get some excercise',
  },
  {
    index: 1,
    isCompleted: false,
    description: 'Read the Bible',
  },
  {
    index: 2,
    isCompleted: false,
    description: 'Shower',
  },
  {
    index: 3,
    isCompleted: false,
    description: 'Take breakfast',
  },
];

localStorage.setItem("tasks", JSON.stringify(tasks));

const getTasks = JSON.parse(localStorage.getItem('tasks'));
for (let i = 0; i < getTasks.length; i += 1) {
  const li = document.createElement('li');
  li.className = 'list-class';
  const liDiv = document.createElement('div');
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = function() {
    if (checkbox.checked) {
      p.style.textDecoration = 'line-through';
      tasks[i].isCompleted = true;
      getTasks.splice(i,1,tasks[i]);
      console.log(getTasks);
      localStorage.setItem('tasks', JSON.stringify(getTasks))
    }
    else {
      p.style.textDecoration = 'none';
      tasks[i].isCompleted = false;
      getTasks.splice(i,1,tasks[i]);
      console.log(getTasks);
      localStorage.setItem('tasks', JSON.stringify(getTasks))
    }
  }
  const icon = document.createElement('i');
  icon.className = 'fa fa-bars';
  p.innerHTML = getTasks[i].description;
  ul.appendChild(li);
  li.appendChild(liDiv);
  liDiv.appendChild(checkbox);
  liDiv.appendChild(p);
  li.appendChild(icon);
}

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());