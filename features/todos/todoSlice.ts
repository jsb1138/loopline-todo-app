import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  // { id: 2198287652875, title: "test1", desc: "1111111" },
  // { id: 2198787454875, title: "test2", desc: "222222" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: {
      reducer(state, action) {
        state.push(action.payload);
        return state;
      },
      prepare(title, desc) {
        return {
          payload: {
            id: nanoid(),
            title,
            desc,
          },
        };
      },
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            desc: action.payload.desc,
          };
        }
        return todo;
      });
    },
  },
});

// {
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

export const { addTodos, removeTodos } = todoSlice.actions;

// updateTodos, completeTodos

export const selectTodos = (state) => state.todos;

export const todoReducer = todoSlice.reducer;
