import { useState } from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@/components/Icons/EditIcon";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import CancelIcon from "@/components/Icons/CancelIcon";
import {
  removeTodos,
  updateTodos,
  selectTodos,
  deselectTodos,
  editSelect,
} from "@/features/todos/todoSlice";

type Todo = {
  id: number;
  title: string;
  desc: string;
  selected: boolean;
  editing: boolean;
};

export default function SingleTodo(todo: Todo) {
  const dispatch = useDispatch();
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);

  function deleteHandler(id: number) {
    dispatch(removeTodos(id));
  }

  function cancelUpdateHandler(id: number) {
    setCanEdit(!canEdit);
    dispatch(editSelect({ type: "DESELECT", id }));
  }

  function updateHandler(id: number, title: string, desc: string) {
    dispatch(deselectTodos(null));
    dispatch(editSelect({ type: "SELECT", id }));
    setTitle(title);
    setDesc(desc);
    setCanEdit(!canEdit);
  }

  function updateSubmissionHandler(id: number, title: string, desc: string) {
    setCanEdit(!canEdit);
    dispatch(updateTodos({ id, title, desc }));
    dispatch(editSelect({ type: "DESELECT", id }));
  }

  function handleSelect(id: number) {
    if (todo.editing) {
      cancelUpdateHandler(id);
      dispatch(editSelect({ type: "DESELECT ALL" }));
    }
    if (todo.selected) {
      dispatch(selectTodos({ type: "DESELECT", id }));
      return;
    }
    dispatch(selectTodos({ type: "SELECT", id }));
  }

  return (
    <div
      className={`todo fcsb ${todo.selected && "slctd-del"} ${
        todo.editing && "slctd-edit"
      }`}
      key={todo.id}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey) {
          handleSelect(todo.id);
        }
      }}
    >
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
              <input type="submit" className="hidden-btn" />
            </form>
          </div>
          <div className="todo-actions fcsbc">
            <button
              className="action-btn cf"
              onClick={() => cancelUpdateHandler(todo.id)}
            >
              <CancelIcon />
            </button>
            <button
              type="submit"
              className="action-btn cf"
              onClick={() => updateSubmissionHandler(todo.id, title, desc)}
            >
              +
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
              onClick={() => deleteHandler(todo.id)}
            >
              <DeleteIcon />
            </button>
            <button
              className="action-btn cf"
              onClick={() => updateHandler(todo.id, todo.title, todo.desc)}
            >
              <EditIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
}