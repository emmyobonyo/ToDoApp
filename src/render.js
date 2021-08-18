// import { sorted } from './removeItem.js'

const ul = document.getElementById('list-items');
const div = document.getElementById('div');
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

localStorage.setItem('tasks', JSON.stringify(tasks));
const getTasks = JSON.parse(localStorage.getItem('tasks'));

const rendered = () => {
  for (let i = 0; i < getTasks.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'list-class';
    const liDiv = document.createElement('div');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
      if (checkbox.checked == true) {
        p.style.textDecoration = 'line-through';
        tasks[i].isCompleted = true;
        li.className = 'delete';
        getTasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(getTasks))
      }
      else {
        p.style.textDecoration = 'none';
        tasks[i].isCompleted = false;
        li.className = 'undelete';
        getTasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(getTasks));
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
}

const sort = () => {
  const hide = document.getElementsByClassName('delete');
  for (let i = 0; i < hide.length; i++) {
    hide[i].style.display = 'none';
  }
}

button.addEventListener('click', sort)

export { rendered as default };