import {
  AuthActionTypes,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/types";
// Login Reducer
interface AuthState {
  isAuthenticated: boolean;
  username?: string;
  token?: string;
  error?: string;
  loading: boolean;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  username: undefined,
  token: undefined,
  error: undefined,
  loading: false,
};

const authReducer = (
  state = initialAuthState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: undefined };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        token: action.payload.token,
        loading: false,
        error: undefined,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: undefined,
        token: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
