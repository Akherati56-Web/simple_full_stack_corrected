// src/actions/types.ts
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export const SET_THEME = "SET_THEME";

export type SetThemeAction = {
  type: typeof SET_THEME;
  payload: string; // 'light' or 'dark'
};

// Login Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export type LoginRequestAction = { type: typeof LOGIN_REQUEST };
export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: { username: string; token: string };
};
export type LoginFailureAction = {
  type: typeof LOGIN_FAILURE;
  payload: { error: string };
};
export type LogoutAction = { type: typeof LOGOUT };

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;

export type ThemeActionTypes = SetThemeAction;

export type CounterActionTypes = IncrementAction | DecrementAction;
