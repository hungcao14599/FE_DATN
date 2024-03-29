import { handleActions } from "redux-actions";

const initialState = {
  fetchAllFriendOfUserById: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllUserApprovalById: {
    result: [],
    error: null,
    requesting: false,
  },
  approvalFriend: {
    result: [],
    error: null,
    requesting: false,
  },
  addFriend: {
    // isAddFriend: false,
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllNotFriendOfUserById: {
    result: [],
    error: null,
    requesting: false,
  },
};

export const friendReducer = handleActions(
  {
    // FETCH_ALL_FRIEND_OF_USER_BY_ID
    FETCH_ALL_FRIEND_OF_USER_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchAllFriendOfUserById: {
        ...state.fetchAllFriendOfUserById,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_FRIEND_OF_USER_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllFriendOfUserById: {
        ...state.fetchAllFriendOfUserById,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_FRIEND_OF_USER_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllFriendOfUserById: {
        ...state.fetchAllFriendOfUserById,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH_ALL_USER_APPROVAL_BY_ID
    FETCH_ALL_USER_APPROVAL_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_USER_APPROVAL_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_USER_APPROVAL_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH_ALL_NOT_FRIEND_OF_USER_BY_ID
    FETCH_ALL_NOT_FRIEND_OF_USER_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchAllNotFriendOfUserById: {
        ...state.fetchAllNotFriendOfUserById,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_NOT_FRIEND_OF_USER_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllNotFriendOfUserById: {
        ...state.fetchAllNotFriendOfUserById,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_NOT_FRIEND_OF_USER_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllNotFriendOfUserById: {
        ...state.fetchAllNotFriendOfUserById,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // APPROVAL FRIEND
    APPROVAL_FRIEND_REQUEST: (state) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: true,
        error: null,
      },
    }),
    APPROVAL_FRIEND_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    APPROVAL_FRIEND_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllUserApprovalById: {
        ...state.fetchAllUserApprovalById,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // ADD FRIEND
    ADD_FRIEND_REQUEST: (state) => ({
      ...state,
      addFriend: {
        ...state.addFriend,
        requesting: true,
        error: null,
        // isAddFriend: false,
      },
    }),
    ADD_FRIEND_SUCCESS: (state, { payload }) => ({
      ...state,
      addFriend: {
        ...state.addFriend,
        requesting: false,
        error: null,
        result: payload.data,
        // isAddFriend: true,
      },
    }),
    ADD_FRIEND_FAIL: (state, { payload }) => ({
      ...state,
      addFriend: {
        ...state.addFriend,
        requesting: false,
        result: null,
        error: payload.error,
        // isAddFriend: false,
      },
    }),
  },
  initialState
);

export default friendReducer;
