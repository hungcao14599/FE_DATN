import { handleActions } from "redux-actions";

const initialState = {
  verifyAccount: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchUserByID: {
    result: [],
    error: null,
    requesting: false,
  },
  updateUserInfo: {
    result: [],
    error: null,
    requesting: false,
  },
};

export const userReducer = handleActions(
  {
    //VERIFY ACCOUNT
    VERIFY_ACCOUNT_REQUEST: (state) => ({
      ...state,
      verifyAccount: {
        ...state.verifyAccount,
        requesting: true,
        error: null,
      },
    }),
    VERIFY_ACCOUNT_SUCCESS: (state, { payload }) => ({
      ...state,
      verifyAccount: {
        ...state.verifyAccount,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    VERIFY_ACCOUNT_FAIL: (state, { payload }) => ({
      ...state,
      verifyAccount: {
        ...state.verifyAccount,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH USER BY ID
    FETCH_USER_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: true,
        error: null,
      },
    }),
    FETCH_USER_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_USER_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH USER BY ID
    UPDATE_USER_INFO_REQUEST: (state) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: true,
        error: null,
      },
    }),
    UPDATE_USER_INFO_SUCCESS: (state, { payload }) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPDATE_USER_INFO_FAIL: (state, { payload }) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default userReducer;
