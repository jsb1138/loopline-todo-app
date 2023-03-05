import { useDispatch } from "react-redux";
import { deselectTodos } from "@/features/todos/todoSlice";

export default function BackgroundClickArea() {
  const dispatch = useDispatch();

  function deselectHandler() {
    dispatch(deselectTodos(null));
  }
  return <div className="bg-click-area" onClick={deselectHandler}></div>;
}
