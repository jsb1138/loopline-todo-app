import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "@/features/todos/todoSlice";

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
      dispatch(addTodos(title, desc));
      setTitle("");
      setDesc("");
    } else {
      setFormInvalid(true);
      setTimeout(() => {
        setFormInvalid(false);
      }, 2000);
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
