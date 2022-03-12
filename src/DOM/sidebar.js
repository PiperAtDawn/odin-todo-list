import projectModal from "./project-modal";

const sidebar = document.createElement('div');
sidebar.className = 'sidebar';

sidebar.appendChild(projectModal);

const h2 = document.createElement('h2');
h2.textContent = 'PROJECTS';
sidebar.appendChild(h2);

const addProjectBtn = document.createElement('button');
addProjectBtn.type = 'button';
addProjectBtn.id = 'add-project-btn';
addProjectBtn.innerText = 'Add Project';
addProjectBtn.addEventListener('click', () => {
  projectModal.classList.remove('hide');
});
sidebar.appendChild(addProjectBtn);

const projectList = document.createElement("ul");
projectList.className = "project-list";

sidebar.appendChild(projectList);

export default sidebar;