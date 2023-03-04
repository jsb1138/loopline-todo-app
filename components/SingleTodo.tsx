import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodos } from "@/features/todos/todoSlice";

export default function SingleTodo(todo) {
  const dispatch = useDispatch();

  function clickHandler(id) {
    dispatch(removeTodos(id));
  }

  return (
    <div className="todo fcsb" key={todo.id}>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
      </div>
      <div className="todo-actions fcsbc">
        <button className="action-btn cf" onClick={() => clickHandler(todo.id)}>
          X
        </button>
        <button className="action-btn cf">E</button>
      </div>
    </div>
  );
}
