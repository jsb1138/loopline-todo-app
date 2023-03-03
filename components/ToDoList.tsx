import { useSelector } from "react-redux";
import { selectTodos } from "@/redux/reducer";

export default function ToDoList() {
  const todos = useSelector(selectTodos);

  // const renderedTodos = todos.map((todo) => {
  //   <article key={todo.id}>
  //     <h3>{todo.title}</h3>
  //     <p>{todo.desc}</p>
  //   </article>;
  // });

  console.log(">>>>>>>>>>>", todos);
  return (
    <section className="todo-list">
      <h2>ToDoList</h2>
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </div>
      ))}
    </section>
  );
}
