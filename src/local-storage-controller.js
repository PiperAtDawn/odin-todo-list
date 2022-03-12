import Project from "./project";
import Task from "./task";

const localStorageController = (() => {
  const unserializeProject = (p) => {
    let newProject = new Project("");
    Object.assign(newProject, p);
    return newProject;
  }

  const unserializeTask = (t) => {
    let newTask = new Task("", "", "", "");
    Object.assign(newTask, t);
    return newTask;
  }

  const getLocalStorage = () => {
    const local = JSON.parse(localStorage.getItem('myProjects'));
    console.log("Localstr:");
    console.log(localStorage.getItem('myProjects'));
    console.log("LocalParse:");
    console.log(local);
    if (typeof local != "undefined" && local) 
      {
        let unserialized = local.map(p => {
          return unserializeProject(p);
        });
        unserialized = unserialized.map(p => {
          p.tasks = p.tasks.map(t => {
            return unserializeTask(t);
          });
          return p;
        });
        console.log("Unserialized:");
        console.log(unserialized);
        return unserialized;
      }
    else return [];
  }

  const updateLocalStorage = (projects) => {
    localStorage.setItem('myProjects', JSON.stringify(projects));
  }

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return { getLocalStorage, updateLocalStorage, clearLocalStorage }
})();

export default localStorageController;