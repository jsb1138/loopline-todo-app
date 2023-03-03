import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 2198287652875, title: "test1", desc: "1111111" },
  { id: 2198787454875, title: "test2", desc: "222222" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

// {
//   //here we will write our reducer
//   //Adding todos
//   addTodos: (state, action) => {
//     state.push(action.payload);
//     return state;
//   },
//   //remove todos
//   removeTodos: (state, action) => {
//     return state.filter((item) => item.id !== action.payload);
//   },
//   //update todos
//   updateTodos: (state, action) => {
//     return state.map((todo) => {
//       if (todo.id === action.payload.id) {
//         return {
//           ...todo,
//           item: action.payload.item,
//         };
//       }
//       return todo;
//     });
//   },
//   //completed
//   completeTodos: (state, action) => {
//     return state.map((todo) => {
//       if (todo.id === action.payload) {
//         return {
//           ...todo,
//           completed: true,
//         };
//       }
//       return todo;
//     });
//   },
// },

export const { addTodos } = todoSlice.actions;

// removeTodos, updateTodos, completeTodos

export const selectTodos = (state) => state.todos;

export const reducer = todoSlice.reducer;
