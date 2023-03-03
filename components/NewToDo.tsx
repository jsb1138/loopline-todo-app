import { useRef, useState } from "react";

function NewToDo() {
  // function NewToDo({ onAddTask, onCancel }) {
  const titleRef = useRef();
  const descRef = useRef();

  const [formInvalid, setFormInvalid] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredSummary = descRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredSummary.trim().length === 0
    ) {
      setFormInvalid(true);
      setTimeout(() => {
        setFormInvalid(false);
      }, 1500);
      return;
    }

    const todoData = {
      title: enteredTitle,
      summary: enteredSummary,
    };
    titleRef.current.value = "";
    descRef.current.value = "";
    console.log(todoData);
    // onAddTask(todoData);
  }

  return (
    <>
      <p
        className={`error-message w100 cf ${
          formInvalid ? "show-msg" : "hide-msg"
        }`}
      >
        <strong>Please fill in both inputs!</strong>
      </p>
      <form id="todo-form" className="cfc" onSubmit={submitHandler}>
        <label htmlFor="title"></label>
        <input type="text" id="title" placeholder="Title" ref={titleRef} />
        <label htmlFor="todo-desc" className="cf"></label>
        <input
          type="text"
          id="todo-desc"
          placeholder="What is your to-do?"
          ref={descRef}
        />
        <button type="submit" className="add-btn cf">
          +
        </button>
      </form>
    </>
    // <form id="new-task-form" onSubmit={submitHandler}>
    //   <p>
    //     <label htmlFor="title">Title</label>
    //     <input type="text" id="title" ref={titleRef} />
    //   </p>
    //   <p>
    //     <label htmlFor="summary">Summary</label>
    //     <textarea id="summary" rows="5" ref={summaryRef} />
    //   </p>
    //   <p>
    //     <label htmlFor="category">Category</label>
    //     <select id="category" ref={categoryRef} defaultValue="moderate">
    //       <option value="urgent">🚨 Urgent</option>
    //       <option value="important">🔴 Important</option>
    //       <option value="moderate">🔵 Moderate</option>
    //       <option value="low">🟢 Low</option>
    //     </select>
    //   </p>
    //   {formInvalid && (
    //     <p className="error-message">
    //       Please provide values for task title, summary and category!
    //     </p>
    //   )}
    //   <p className="actions">
    //     <button type="button" onClick={onCancel}>
    //       Cancel
    //     </button>
    //     <button type="submit">Add Task</button>
    //   </p>
    // </form>
  );
}

export default NewToDo;
