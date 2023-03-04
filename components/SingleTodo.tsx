import { useSelector } from "react-redux";
import { selectTodos } from "@/features/todos/todoSlice";

export default function SingleTodo(todo) {
  return (
    <div className="todo fcsb" key={todo.id}>
      <div className="todo-content">
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
      </div>
      <div className="todo-actions fcsbc">
        <button className="action-btn cf">X</button>
        <button className="action-btn cf">E</button>
      </div>
    </div>
  );
}
