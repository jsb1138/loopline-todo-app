import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

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
            selected: false,
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
            title: action.payload.title,
            desc: action.payload.desc,
          };
        }
        return todo;
      });
    },
    selectTodos: (state, action) => {
      switch (action.payload.type) {
        case "SELECT":
          return state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                selected: true,
              };
            }
            return todo;
          });
        case "DESELECT":
          return state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                selected: false,
              };
            }
            return todo;
          });
        default:
          return state;
      }
    },
    deselectTodos: (state, action) => {
      return state.map((todo) => {
        return {
          ...todo,
          selected: false,
        };
        return todo;
      });
    },
    editSelect: (state, action) => {
      switch (action.payload.type) {
        case "SELECT":
          return state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                editing: true,
              };
            }
            return todo;
          });
        case "DESELECT":
          return state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                editing: false,
              };
            }
            return todo;
          });
        case "DESELECT ALL":
          return state.map((todo) => {
            return {
              ...todo,
              editing: false,
            };
            return todo;
          });
        default:
          return state;
      }
    },
    deleteSelectedTodos: (state, action) => {
      return state.filter((item) => item.selected !== true);
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  selectTodos,
  deselectTodos,
  editSelect,
  deleteSelectedTodos,
} = todoSlice.actions;

// updateTodos, completeTodos

export const getTodos = (state) => state.todos;

export const todoReducer = todoSlice.reducer;
