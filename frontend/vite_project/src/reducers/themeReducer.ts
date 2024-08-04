import { ThemeActionTypes, SET_THEME } from "../actions/types";
// Theme Reducer
interface ThemeState {
  theme: string; // 'light' or 'dark'
}

const initialThemeState: ThemeState = {
  theme: "light",
};

const themeReducer = (
  state = initialThemeState,
  action: ThemeActionTypes
): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
