import { useDispatch } from "react-redux";
import TodoList from "@/components/TodoList";
import NewTodo from "@/components/NewTodo";
import BatchDeleteButton from "@/components/BatchDeleteButton";
import { deselectTodos } from "@/features/todos/todoSlice";

function App() {
  const dispatch = useDispatch();

  function deselectHandler() {
    dispatch(deselectTodos(null));
  }
  return (
    <>
      <TodoList />
      <NewTodo />
      <BatchDeleteButton />
      <div className="bg-click-area" onClick={deselectHandler}></div>
    </>
  );
}

export default App;
