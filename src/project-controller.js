import Project from './project';
import localStorageController from './local-storage-controller';
import displayController from './display-controller';

const projectController = (() => {
  let projects = [];
  let currentProject = 0;

  const getFromStorage = () => {
    projects = localStorageController.getLocalStorage();
    displayController.generateProjects();
  };

  const writeToStorage = () => {
    localStorageController.updateLocalStorage(projects);
  };

  const createProject = (name) => {
    const newProject = new Project(name);
    projects.push(newProject);
    writeToStorage();
    displayController.generateProjects();
    return newProject;
  };

  const setCurrentProject = (id) => {
    currentProject = id;
  };

  const getCurrentProject = () => projects[currentProject];

  const getCurrentIndex = () => currentProject;

  const getTaskByIndex = (index) => projects[currentProject].tasks[index];

  const deleteTaskByIndex = (index) => {
    projects[currentProject].deleteTask(index);
    writeToStorage();
  };

  const deleteProjectById = (id) => {
    projects.splice(id, 1);
    writeToStorage();
  };

  const updateTaskDescription = (index, description) => {
    projects[currentProject].tasks[index].description = description;
    writeToStorage();
  };

  const addTask = (task) => {
    projects[currentProject].addTask(task);
    writeToStorage();
    displayController.generateTasks();
  };

  const getProjects = () => projects;

  return {
    getProjects,
    setCurrentProject,
    getCurrentProject,
    getCurrentIndex,
    getTaskByIndex,
    updateTaskDescription,
    deleteTaskByIndex,
    deleteProjectById,
    addTask,
    getFromStorage,
    writeToStorage,
    createProject,
  };
})();

export default projectController;
