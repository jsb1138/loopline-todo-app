import { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodos, updateTodos } from "@/features/todos/todoSlice";

type Todo = {
  id: number;
  title: string;
  desc: string;
};

export default function SingleTodo(todo: Todo) {
  const [canEdit, setCanEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);

  function deleteHandler(id) {
    dispatch(removeTodos(id));
  }

  function updateHandler(title, desc) {
    setTitle(title);
    setDesc(desc);
    setCanEdit(!canEdit);
    // dispatch(updateTodos({ id, title, desc }));
  }

  function updateSubmissionHandler(id, title, desc) {
    setCanEdit(!canEdit);
    dispatch(updateTodos({ id, title, desc }));
  }

  return (
    <div className="todo fcsb" key={todo.id}>
      {canEdit ? (
        <>
          <div className="todo-content">
            <form
              id="edit-form"
              onSubmit={() => updateSubmissionHandler(todo.id, title, desc)}
            >
              <label htmlFor="title"></label>
              <input
                type="text"
                id="title-edit"
                name="title"
                value={title}
                onChange={onTitleChange}
                autoFocus
              />
              <label htmlFor="todo-desc" className="cf"></label>
              <input
                type="text"
                id="desc-edit"
                name="todo-desc"
                value={desc}
                onChange={onDescChange}
              />
              <button type="submit" className="edit-btn cf">
                +
              </button>
            </form>
          </div>
          <div className="todo-actions fcsbc">
            <button
              className="action-btn cf"
              onClick={() => setCanEdit(!canEdit)}
            >
              C
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="todo-content">
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
          <div className="todo-actions fcsbc">
            <button
              className="action-btn cf"
              onClick={() => clickHandler(todo.id)}
            >
              X
            </button>
            <button
              className="action-btn cf"
              onClick={() => updateHandler(todo.title, todo.desc)}
            >
              E
            </button>
          </div>
        </>
      )}
    </div>
  );
}
