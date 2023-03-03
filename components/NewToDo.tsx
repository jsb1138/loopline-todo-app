import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodos } from "@/redux/reducer";

function NewToDo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [formInvalid, setFormInvalid] = useState(false);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);

  function submitHandler(event) {
    event.preventDefault();

    if (title && desc) {
      dispatch(
        addTodos({
          id: nanoid(),
          title,
          desc,
        })
      );

      setTitle("");
      setDesc("");
      // if (title.trim().length === 0 || desc.trim().length === 0) {
      //   setFormInvalid(true);
      //   setTimeout(() => {
      //     setFormInvalid(false);
      //   }, 1500);
      //   return;
      // }

      // const todoData = {
      //   title: title,
      //   summary: desc,
      // };
      // console.log(todoData);
      // onAddTask(todoData);
    }
  }

  return (
    <>
      <p
        className={`error-msg w100 cf ${formInvalid ? "show-msg" : "hide-msg"}`}
      >
        <strong>Please fill in both inputs!</strong>
      </p>
      <form id="todo-form" onSubmit={submitHandler}>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="todo-desc" className="cf"></label>
        <input
          type="text"
          id="todo-desc"
          name="todo-desc"
          placeholder="What is your to-do?"
          value={desc}
          onChange={onDescChange}
        />
        <button type="submit" className="add-btn cf">
          +
        </button>
      </form>
    </>
  );
}

export default NewToDo;
