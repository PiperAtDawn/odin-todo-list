import Project from './project';
import Task from './task';

const localStorageController = (() => {
  const unserializeProject = (p) => {
    const newProject = new Project('');
    Object.assign(newProject, p);
    return newProject;
  };

  const unserializeTask = (t) => {
    const newTask = new Task('', '', '', '');
    Object.assign(newTask, t);
    return newTask;
  };

  const getLocalStorage = () => {
    const local = JSON.parse(localStorage.getItem('myProjects'));
    if (typeof local !== 'undefined' && local) {
      let unserialized = local.map((p) => unserializeProject(p));
      unserialized = unserialized.map((p) => {
        p.tasks = p.tasks.map((t) => unserializeTask(t));
        return p;
      });
      return unserialized;
    }
    return [];
  };

  const updateLocalStorage = (projects) => {
    localStorage.setItem('myProjects', JSON.stringify(projects));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return { getLocalStorage, updateLocalStorage, clearLocalStorage };
})();

export default localStorageController;
