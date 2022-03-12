import './style.css';
import header from './DOM/header';
import main from './DOM/main';
import sidebar from './DOM/sidebar';
import taskModal from './DOM/task-modal';
import Task from './task';
import projectController from './project-controller';
import displayController from './display-controller';

document.body.appendChild(taskModal);
document.body.appendChild(header);
document.body.appendChild(sidebar);
document.body.appendChild(main);

projectController.getFromStorage();
if (projectController.getProjects().length === 0) {
  projectController.createProject('Default');
} else {
  displayController.generateProjects();
}
displayController.generateTasks();

const taskForm = taskModal.querySelector('#task-form');
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const values = e.target.elements;
  const newTask = new Task(
    values.title.value,
    values.description.value,
    values.dueDate.value,
    values.priority.value
  );
  projectController.addTask(newTask);
  taskModal.classList.add('hide');
  taskForm.reset();
});

const projectModal = document.querySelector('#project-modal');
const projectForm = document.querySelector('#project-form');
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const values = e.target.elements;
  projectController.createProject(values.title.value);
  projectForm.reset();
  projectModal.classList.add('hide');
});
