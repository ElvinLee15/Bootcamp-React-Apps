import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoReducer";

export default configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});
