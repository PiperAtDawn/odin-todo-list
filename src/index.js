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

const makeDefaultProjects = () => {
  projectController.createProject('Default');
  let newTask = new Task('Some task', 'Do this task', '2022-02-22', 'high');
  projectController.addTask(newTask);
  newTask = new Task('Some other task', 'Maybe do this one', '2022-02-23', 'low');
  projectController.addTask(newTask);
  projectController.createProject('New Project');
  projectController.setCurrentProject(1);
  newTask = new Task('Task in other project', 'Do it if you wanna', '2022-03-03', 'medium');
  projectController.addTask(newTask);
  projectController.setCurrentProject(0);
};

projectController.getFromStorage();
if (projectController.getProjects().length === 0) {
  makeDefaultProjects();
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
