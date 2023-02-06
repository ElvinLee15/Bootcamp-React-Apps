import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import "./ToDoDisplay.css";

const ToDoItems = () => {
  const toDoItemArr = useSelector((state) => state.toDo.initialToDoStateArr);
  const toDoItems = toDoItemArr.map((item) => {
    return <ToDoItem id={item.id.toString()} content={item.content} />;
  });
  return toDoItems;
};

const ToDoDisplay = () => {
  return (
    <div className="to-do-display-container">
      <ul>
        <ToDoItems />
      </ul>
    </div>
  );
};

export default ToDoDisplay;
