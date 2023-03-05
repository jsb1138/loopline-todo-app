import TodoList from "@/features/todos/TodoList";
import NewTodo from "@/features/todos/NewTodo";
import BackgroundClickArea from "@/components/BackgroundClickArea";
import BatchDeleteButton from "@/components/BatchDeleteButton";

function App() {
  return (
    <>
      <TodoList />
      <NewTodo />
      <BatchDeleteButton />
      <BackgroundClickArea />
    </>
  );
}

export default App;
