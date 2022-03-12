const projectModal = document.createElement('div');
projectModal.classList = 'modal hide';
projectModal.id = 'project-modal';
projectModal.innerHTML = `
  <div class="modal-content">
    <form id="project-form">
      <label>
        Title
        <input
          type="text"
          placeholder="Title"
          name="title"
          required
        >
      </label>
      <button type="submit" id="submit-project">
        Add Project
      </button>
    </form>
  </div>
  `

export default projectModal;