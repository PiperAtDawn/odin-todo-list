import projectController from './project-controller';

const displayController = (() => {
  const generateProjects = () => {
    const projectList = document.querySelector('.project-list');
    projectList.innerHTML = '';

    const projects = projectController.getProjects();

    projects.forEach((p) => {
      const listItem = document.createElement('li');
      listItem.className = 'project';
      listItem.dataset.id = p.id;

      const itemName = document.createElement('span');
      itemName.textContent = p.name;
      itemName.addEventListener('click', () => {
        projectController.setCurrentProject(listItem.dataset.id);
        const currentProject = document.querySelector('#current-project');
        currentProject.textContent = projectController
          .getCurrentProject()
          .name.toUpperCase();
        generateTasks();
      });

      listItem.appendChild(itemName);

      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        if (projectController.getCurrentIndex() == p.id) {
          projectController.setCurrentProject(0);
          generateTasks();
        }
        projectController.deleteProjectById(p.id);
        generateProjects();
      });
      listItem.appendChild(deleteBtn);

      projectList.appendChild(listItem);
    });
  };

  const generateTasks = () => {
    const tasksDiv = document.querySelector('.tasks');
    tasksDiv.innerHTML = '';

    const project = projectController.getCurrentProject();
    project.tasks.forEach((t, index) => {
      const task = document.createElement('div');
      task.className = 'task';
      task.dataset.index = index;

      const taskInfo = document.createElement('div');
      taskInfo.className = 'task-info';

      const title = document.createElement('span');
      title.id = 'task-title';
      title.textContent = t.title;
      taskInfo.appendChild(title);

      const dueDate = document.createElement('span');
      dueDate.textContent = `Due: ${t.dueDate}`;
      taskInfo.appendChild(dueDate);

      const priority = document.createElement('span');
      priority.textContent = `Priority: ${t.priority}`;
      taskInfo.appendChild(priority);

      const completedLabel = document.createElement('label');
      completedLabel.textContent = 'Completed: ';
      const completed = document.createElement('input');
      completed.type = 'checkbox';
      completed.checked = t.completed;

      completed.addEventListener('click', (e) => {
        e.stopPropagation();
        const curTask = projectController.getTaskByIndex(index);
        curTask.toggle();
        if (curTask.completed) {
          task.classList.add('completed-task');
        } else {
          task.classList.remove('completed-task');
        }
      });

      completedLabel.appendChild(completed);
      taskInfo.appendChild(completedLabel);

      const deleteTaskBtn = document.createElement('button');
      deleteTaskBtn.type = 'button';
      deleteTaskBtn.innerText = 'Delete';
      deleteTaskBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        projectController.deleteTaskByIndex(index);
        generateTasks();
      });

      taskInfo.appendChild(deleteTaskBtn);

      task.appendChild(taskInfo);

      const taskDescription = document.createElement('div');
      taskDescription.classList = 'task-description hide';
      const description = document.createElement('textarea');
      description.textContent = t.description;

      description.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      description.addEventListener('focusout', (e) => {
        const { value } = e.target;
        projectController.updateTaskDescription(index, value);
      });

      taskDescription.appendChild(description);

      task.appendChild(taskDescription);

      task.addEventListener('click', () => {
        taskDescription.classList.toggle('hide');
      });

      tasksDiv.appendChild(task);
    });

    const projectTitle = document.querySelector('#current-project');
    projectTitle.textContent = projectController
      .getCurrentProject()
      .name.toUpperCase();
  };

  return { generateProjects, generateTasks };
})();

export default displayController;
