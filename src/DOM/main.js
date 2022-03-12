const main = document.createElement('main');

const h2 = document.createElement('h2');
h2.textContent = 'DEFAULT';
h2.id = 'current-project';
main.appendChild(h2);

const tasksDiv = document.createElement('div');
tasksDiv.className = 'tasks';
main.appendChild(tasksDiv);

export default main;