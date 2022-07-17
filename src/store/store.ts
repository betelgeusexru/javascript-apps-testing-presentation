import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReduxStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
