import { useSelector } from "react-redux";
import { selectTodos } from "@/features/todos/todoSlice";

import SingleTodo from "./SingleTodo";

export default function ToDoList() {
  const todos = useSelector(selectTodos);

  return (
    <>
      <section className="todo-list">
        {todos.map((todo) => (
          <SingleTodo key={todo.id} {...todo} />
        ))}
      </section>
      <div className="fade-out"></div>
    </>
  );
}
