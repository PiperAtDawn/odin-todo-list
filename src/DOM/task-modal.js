const taskModal = document.createElement('div');
taskModal.classList = 'modal hide';
taskModal.id = 'task-modal';
taskModal.innerHTML = `
  <div class="modal-content">
    <form id="task-form">
      <label>
        Title
        <input
          type="text"
          placeholder="Title"
          name="title"
          required
        >
      </label>
      <label>
        Description
        <textarea
          placeholder="Description"
          name="description"
        ></textarea>
      </label>
      <label>
       Due date
        <input
          type="date"
          name="dueDate"
          required
        >
      </label>
      <label>
      Priority
        <select name="priority">
          <option value="high">
            High
          </option>
          <option value="medium">
            Medium
          </option>
          <option value="low">
            Low
          </option>
        </select>
      </label>
      <button type="submit" id="submit-task">
        Add Task
      </button>
    </form>
  </div>
  `

export default taskModal;