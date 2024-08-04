// src/actions/counterActions.ts
import { INCREMENT, DECREMENT, CounterActionTypes } from "./types";

export const increment = (): CounterActionTypes => ({
  type: INCREMENT,
});

export const decrement = (): CounterActionTypes => ({
  type: DECREMENT,
});

import {
  SET_THEME,
  ThemeActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  AuthActionTypes,
} from "./types";

// Theme Actions
export const setTheme = (theme: string): ThemeActionTypes => ({
  type: SET_THEME,
  payload: theme,
});

// Login Actions
export const loginRequest = (): AuthActionTypes => ({ type: LOGIN_REQUEST });
export const loginSuccess = (
  username: string,
  token: string
): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: { username, token },
});
export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: { error },
});
export const logout = (): AuthActionTypes => ({ type: LOGOUT });
