import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "AtpyBwYz53bBD9HSjRh6n",
    title: "These are the todos!",
    desc: "This is where you can describe your to do.",
    editing: false,
    selected: false,
  },
  {
    id: "A3bBD9HSjRh6ntpyBwYz5",
    title: "Edit or delete todos",
    desc: "Using the controls on the right.",
    editing: false,
    selected: false,
  },
  {
    id: "pBw3bBD9HSjRh6AD9Hnt9HySjpyBwYz5",
    title: "Control click to select",
    desc: "Then you can delete multiple todos at once.",
    editing: false,
    selected: false,
  },
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
            editing: false,
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
    //select todos
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
    // deselect all todos
    deselectTodos: (state, action) => {
      return state.map((todo) => {
        return {
          ...todo,
          selected: false,
        };
        return todo;
      });
    },
    // edit select
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
    // delete selected todos
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

export const getTodos = (state) => state.todos;

export const todoReducer = todoSlice.reducer;
