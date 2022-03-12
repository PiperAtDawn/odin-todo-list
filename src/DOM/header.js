const header = document.createElement('header');

const h1 = document.createElement('h1');
h1.textContent = 'TODO LIST';

header.appendChild(h1);

const addTaskBtn = document.createElement('button');
addTaskBtn.type = 'button';
addTaskBtn.textContent = 'Add task';
addTaskBtn.id = 'add-task-btn';

addTaskBtn.addEventListener('click', () => {
  const modal = document.querySelector('#task-modal');
  modal.classList.remove('hide');
});

header.appendChild(addTaskBtn);

export default header;