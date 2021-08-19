import './style.css';
import rendered from './render.js';

rendered();

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());