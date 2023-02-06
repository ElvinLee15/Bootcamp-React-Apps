import { createSlice } from "@reduxjs/toolkit";

// Empty Array storing all list items
const initialToDoStateArr = [];

// Initial State of a todo item
const initialToDoStateItem = {
  id: 1,
  content: "Test Content",
  completed: false,
};

// Create toDoSlice to add to store
export const toDoSlice = createSlice({
  name: "toDo",

  initialState: {
    initialToDoStateArr,
    initialToDoStateItem,
  },

  // toDoReducers
  reducers: {
    addToDo: (state, action) => {
      // Add toDoObject into toDo Array in the store
      state.initialToDoStateArr.push(action.payload);

      // Increase id by 1, so next item is allocated the correct id value
      state.initialToDoStateItem.id += 1;
    },

    // Update Button Reducer
    updateToDo: (state, action) => {
      // Find index of item with the same ID from payload
      const updateItemIdx = state.initialToDoStateArr.findIndex(
        (toDo) => toDo.id === action.payload[0]
      );

      // Update content of the toDo Object in the array's content
      state.initialToDoStateArr[updateItemIdx].content = action.payload[1];
    },

    // Delete Button Reducer
    deleteToDo: (state, action) => {
      // Return toDoItem object with the same Id
      state.initialToDoStateArr = state.initialToDoStateArr.filter(
        (item) => item.id !== action.payload
      );
    },

    // Complete Button Reducer
    completedToDo: (state, action) => {
      // Find index of item with the same ID from payload
      const completedItemIdx = state.initialToDoStateArr.findIndex(
        (toDo) => toDo.id === action.payload
      );

      // Update toDo Item Object complete to true
      state.initialToDoStateArr[completedItemIdx].completed = true;
    },
  },
});

export const { addToDo, updateToDo, deleteToDo, completedToDo } =
  toDoSlice.actions;
export default toDoSlice.reducer;
