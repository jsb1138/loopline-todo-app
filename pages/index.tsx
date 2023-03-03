import ToDoInput from "@/components/ToDoInput";

function App() {
  return (
    <>
      {/* {isAddingTask && (
        <Modal onClose={cancelAddTaskHandler}>
          <NewTask onAddTask={addTaskHandler} onCancel={cancelAddTaskHandler} />
        </Modal>
      )} */}
      {/* <Header /> */}
      {/* <TaskControl
          onStartAddTask={startAddTaskHandler}
          onSetFilter={setFilterHandler}
        />
        <TaskList tasks={displayedTasks} /> */}
      <ToDoInput />
    </>
  );
}

export default App;
