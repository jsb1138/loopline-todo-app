import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "@/features/todos/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function NewToDo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [invalidInput, setInvalidInput] = useState<boolean>(false);

  const onTitleChange = (e: React.ChangeEvent<any>) => setTitle(e.target.value);
  const onDescChange = (e: React.ChangeEvent<any>) => setDesc(e.target.value);

  function submitHandler(e: React.ChangeEvent<any>) {
    e.preventDefault();

    if (title && desc) {
      dispatch(
        addTodos({
          id: nanoid(),
          title,
          desc,
          editing: false,
          selected: false,
        })
      );
      setTitle("");
      setDesc("");
    } else {
      setInvalidInput(true);
      setTimeout(() => {
        setInvalidInput(false);
      }, 2000);
    }
  }

  return (
    <>
      <div className="form-container">
        <p
          className={`error-msg w100 cf ${
            invalidInput ? "show-msg" : "hide-msg"
          }`}
        >
          <strong>Please fill in both inputs!</strong>
        </p>
        <form id="todo-form" onSubmit={submitHandler}>
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="What is your to-do?"
            value={title}
            onChange={onTitleChange}
            autoFocus
          />
          <label htmlFor="todo-desc" className="cf"></label>
          <input
            type="text"
            id="todo-desc"
            name="todo-desc"
            placeholder="Add some details..."
            value={desc}
            onChange={onDescChange}
          />
          <button id="add-btn" type="submit" className="add-btn cf">
            +
          </button>
        </form>
      </div>
      <div className="fade-out"></div>
    </>
  );
}

export default NewToDo;
