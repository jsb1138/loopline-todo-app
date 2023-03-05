import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTodos } from "@/features/todos/todoSlice";
import { deleteSelectedTodos } from "@/features/todos/todoSlice";
import DeleteAllIcon from "@/components/Icons/DeleteAllIcon";

export default function BatchDeleteButton() {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  function batchDeleteHandler() {
    dispatch(deleteSelectedTodos(null));
  }

  return (
    <div
      className={`batch-del-btn ${
        todos.filter((todo) => todo.selected).length >= 1 ? "show" : "hide"
      }`}
      onClick={batchDeleteHandler}
    >
      <DeleteAllIcon />
    </div>
  );
}
