import { handleActions } from "redux-actions";

const initialState = {
  loginUser: {
    result: [],
    error: null,
    requesting: false,
  },
};

export const lockups = handleActions(
  {
    LOGIN_USER_REQUEST: (state) => ({
      ...state,
      loginUser: {
        ...state.loginUser,
        requesting: true,
        error: null,
      },
    }),
    LOGIN_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      loginUser: {
        ...state.loginUser,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    LOGIN_USER_FAIL: (state, { payload }) => ({
      ...state,
      loginUser: {
        ...state.loginUser,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);
