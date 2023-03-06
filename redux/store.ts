import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "../features/todos/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { loadState } from "../utils/local-storage";

const persistConfig = {
  timeout: 5,
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: loadState(),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type Todo = {
  id: string | number;
  title: string;
  desc: string;
  selected: boolean;
  editing: boolean;
};
