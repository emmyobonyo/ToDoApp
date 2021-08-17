import './style.css';

const ul = document.getElementById('list-items');
const tasks = [
  {
    index: 3,
    isCompleted: false,
    description: 'get some excercise',
  },
  {
    index: 1,
    isCompleted: false,
    description: 'Read the Bible',
  },
  {
    index: 0,
    isCompleted: false,
    description: 'Shower',
  },
  {
    index: 2,
    isCompleted: false,
    description: 'Take breakfast',
  },
];

const localTasks = [];
for (let i = 0; i < tasks.length; i += 1) {
  tasks.forEach((task) => {
    if (task.index === i) {
      localTasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(localTasks));
    }
  });
  const getTasks = JSON.parse(localStorage.getItem('tasks'));
  const li = document.createElement('li');
  const liDiv = document.createElement('div');
  const p = document.createElement('p');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
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