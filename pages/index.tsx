import TodoList from "@/components/TodoList";
import TodoInput from "@/components/TodoInput";

function App() {
  return (
    <>
      <main>
        <h1 style={{ textAlign: "center" }}>Todos</h1>
        <TodoList />
        <TodoInput />
      </main>
    </>
  );
}

export default App;
