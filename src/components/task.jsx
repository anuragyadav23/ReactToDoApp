function Task({ item }) {
  return (
    <div className="task-container">
      <div className="task-name">{item.taskName}</div>
      <div className="task-name">{item.date}</div>
      <div className="buttons-container">
        <i id="edit" className="fa-solid fa-pencil"></i>
        <p>|</p>
        <i id="delete" className="fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
}

export default Task;
