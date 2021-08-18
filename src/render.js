const ul = document.getElementById('list-items');
const button = document.getElementById('submit');

const rendered = () => {
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

  if (localStorage.length === 0) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  const getTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < getTasks.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'list-class';
    const liDiv = document.createElement('div');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
      if (checkbox.checked === true) {
        p.style.textDecoration = 'line-through';
        getTasks[i].isCompleted = true;
        li.className = 'delete';
        localStorage.setItem('tasks', JSON.stringify(getTasks));
      } else {
        p.style.textDecoration = 'none';
        getTasks[i].isCompleted = false;
        li.className = 'undelete';
        localStorage.setItem('tasks', JSON.stringify(getTasks));
      }
    };
    const icon = document.createElement('i');
    icon.className = 'fa fa-bars';
    p.innerHTML = getTasks[i].description;
    if (getTasks[i].isCompleted) {
      p.style.textDecoration = 'line-through';
      checkbox.checked = true;
    }
    ul.appendChild(li);
    li.appendChild(liDiv);
    liDiv.appendChild(checkbox);
    liDiv.appendChild(p);
    li.appendChild(icon);
  }
};

const sort = () => {
  const hide = document.getElementsByClassName('delete');
  const getTasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < hide.length; i += 1) {
    hide[i].style.display = 'none';
    getTasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(getTasks));
  }
};

button.addEventListener('click', sort);

export { rendered as default };