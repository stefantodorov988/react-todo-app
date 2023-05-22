import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../helpers/localstorage.helper";

const localStorageState = loadState();

// const initialState = [...localStorageState];
const initialState = [{ 'id' : '123'}]

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      todo.completed = !todo.completed;
    },
    remove: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    removeCompleted: (state) => {
      return state.filter((t) => t.completed !== true);
    },
    reorderArray: (state, action) => {
      return action.payload;
    },
  },
});


export const { add, update, remove, removeCompleted, reorderArray } =
  todoSlice.actions;

export default todoSlice.reducer;