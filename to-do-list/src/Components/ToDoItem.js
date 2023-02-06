// Each individual todo list item component
// Has user inputted value and buttons of edit, delete and completed
import "./ToDoItem.css";

import { useState } from "react";
import { updateToDo, deleteToDo, completedToDo } from "../store/toDoReducer";
import { useDispatch } from "react-redux";

const ToDoItem = (props) => {
  // Initial state equal user allocated toDoItem input
  const [textAreaContent, setTextAreaContent] = useState(props.content);

  // Initial state of update button is false to hide it when toDo Item is loaded
  const [showUpdate, setShowUpdate] = useState(false);

  const dispatch = useDispatch();

  // Change textAreaContent state to match user input
  const handleChange = (e) => {
    setTextAreaContent(e.target.value);
  };

  // Edit Button Function
  const handleEditToDo = (e) => {
    e.preventDefault();
    const editToDoItem = e.target.parentNode;
    const textArea = editToDoItem.childNodes[0];

    // Allow user to edit text area
    textArea.removeAttribute("readOnly");

    // Reveal update button when edit button is clicked
    setShowUpdate(true);
  };

  // Update Button Function
  const handleUpdateToDo = (e) => {
    e.preventDefault();
    const editToDoItem = e.target.parentNode;
    const textArea = editToDoItem.childNodes[0];

    // Set Read Only attribute on todoItem to disable edit on text area
    textArea.setAttribute("readOnly", true);

    // Provide list ID and user input (textArea.value) to updateToDo Reducer
    dispatch(updateToDo([Number(e.target.parentNode.id), textAreaContent]));

    // Hide Update Button when update button is clicked
    setShowUpdate(false);
  };

  // Delete Button Function
  const handleDeleteToDo = (e) => {
    e.preventDefault();
    const deleteToDoItem = e.target.parentNode;
    const textArea = deleteToDoItem.childNodes[0];

    textArea.value = props.content;
    // Provide list ID to deleteToDo Reducer
    dispatch(deleteToDo(Number(e.target.parentNode.id)));
  };

  // Complete Button Function
  const handleCompletedToDo = (e) => {
    e.preventDefault();

    const completedToDoItem = e.target.parentNode;
    const textArea = completedToDoItem.childNodes[0];

    // Provide list ID to completedToDo Reducer
    dispatch(completedToDo(Number(e.target.parentNode.id)));

    // Cross out item when completed is clicked
    textArea.style.setProperty("text-decoration", "line-through");
  };

  return (
    <li key={props.id} id={props.id}>
      <textarea
        key={props.id}
        onChange={handleChange}
        defaultValue={props.content}
        readOnly
      ></textarea>

      {showUpdate ? (
        <button
          className="update-button"
          type="button"
          onClick={handleUpdateToDo}
        >
          Update
        </button>
      ) : null}

      <button className="edit-button" type="button" onClick={handleEditToDo}>
        Edit
      </button>
      <button
        className="delete-button"
        type="button"
        onClick={handleDeleteToDo}
      >
        Delete
      </button>
      <button
        className="completed-button"
        type="button"
        onClick={handleCompletedToDo}
      >
        Completed
      </button>
    </li>
  );
};

export default ToDoItem;
