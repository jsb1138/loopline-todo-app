import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

const initialState = [
  {
    id: "AtpyBwYz53bBD9HSjRh6n",
    title: "This is a the to-do!",
    desc: "And right here is the description of a to-do.",
    editing: false,
    selected: false,
  },
  {
    id: "BbBtpDjRh6n9HwA3SyYz5",
    title: "If you're done with a todo, delete it!",
    desc: "This one feels very done. Hit the trash button to the right.",
    editing: false,
    selected: false,
  },
  {
    id: "A3bBD9HSjRh6ntpyBwYz5",
    title: "You can edit to-dos!",
    desc: "Just hit the edit button to the right... maybe if you spot a spelling errro.",
    editing: false,
    selected: false,
  },
  {
    id: "pBw3bBD9HSjRh6AD9Ht9H",
    title: "You can even delete multiple to-dos at once!",
    desc: "Just select the to-dos by ctrl-clicking (cmd-clicking on a Mac) and then click the delete button that pops up in the lower right of the screen. Easy.",
    editing: false,
    selected: false,
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // add todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    // remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // update todos
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
    // select todos
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
    // get selected todos
    getSelectedTodos: (state, action) => {
      return state.filter((item) => item.selected === true);
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
  getSelectedTodos,
  deleteSelectedTodos,
} = todoSlice.actions;

export const getTodos = (state: RootState) => state.todos;

export const todoReducer = todoSlice.reducer;
