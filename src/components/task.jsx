function Task({ item }) {
  return (
    <div className="task-container">
      <div className="task-name">{item}</div>
      <div className="buttons-container">
        <i id="edit" class="fa-solid fa-pencil"></i>
        <p>|</p>
        <i id="delete" class="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
}

export default Task;
