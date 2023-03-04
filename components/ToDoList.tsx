import { useSelector } from "react-redux";
import { getTodos } from "@/features/todos/todoSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import SingleTodo from "./SingleTodo";

export default function ToDoList() {
  const todos = useSelector(getTodos);
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <>
      <section className="todo-list" ref={parent}>
        {todos.map((todo) => (
          <SingleTodo key={todo.id} {...todo} />
        ))}
      </section>
      <div className="fade-out"></div>
    </>
  );
}
