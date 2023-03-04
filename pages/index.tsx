import { useDispatch } from "react-redux";
import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";
import BatchDeleteButton from "@/components/BatchDeleteButton";
import { deselectTodos } from "@/features/todos/todoSlice";

function App() {
  const dispatch = useDispatch();

  function deselectHandler() {
    dispatch(deselectTodos(null));
  }
  return (
    <>
      <main>
        <h1 style={{ textAlign: "center" }}>Todos</h1>
        <TodoList />
        <TodoInput />
        <BatchDeleteButton />
        <div className="bg-click-area" onClick={deselectHandler}></div>
      </main>
    </>
  );
}

export default App;
