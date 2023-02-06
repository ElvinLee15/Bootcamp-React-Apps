import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../store/toDoReducer";
import "./ToDoAdd.css";

// Input component to let user add a new todo item to the list
const ToDoAdd = () => {
  // Initial value of toDo Item
  const [toDoInput, setToDo] = useState("");
  const dispatch = useDispatch();

  // Obtain toDo state from store
  const toDo = useSelector((state) => state.toDo);

  // Obtain initial state  of toDoItem from store
  const toDoID = toDo.initialToDoStateItem.id;
  const toDoCompleted = toDo.initialToDoStateItem.completed;

  // Set to do item equal user input value
  const handleToDo = (e) => {
    setToDo(e.target.value);
  };

  // Add newly created toDo Item object to array in store
  const handleAddToDo = (e) => {
    e.preventDefault();
    dispatch(
      addToDo({
        id: toDoID,
        content: toDoInput,
        completed: toDoCompleted,
      })
    );

    // Reset user input to empty
    setToDo("");
  };

  return (
    <div className="form-container">
      <form className="user-input-form">
        <h1 className="form-heading">To Do List</h1>
        <div className="form-input-button-container">
          <input
            className="to-do-input"
            input="text"
            onChange={(e) => {
              handleToDo(e);
            }}
            value={toDoInput}
          ></input>
          <button
            className="add-to-do-item-button"
            type="button"
            onClick={handleAddToDo}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoAdd;
