// src/reducers/index.ts
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
