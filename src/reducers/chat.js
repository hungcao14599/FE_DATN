import { handleActions } from "redux-actions";

const initialState = {
  fetchChatsByUserId: {
    result: [],
    error: null,
  },
  fetchMembersInChat: {
    result: [],
    error: null,
  },
};

export const chatReducer = handleActions(
  {
    FETCH_CHATS_BY_USER_ID_REQUEST: (state) => ({
      ...state,
      fetchChatsByUserId: {
        ...state.fetchChatsByUserId,
        error: null,
      },
    }),
    FETCH_CHATS_BY_USER_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchChatsByUserId: {
        ...state.fetchChatsByUserId,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_CHATS_BY_USER_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchChatsByUserId: {
        ...state.fetchChatsByUserId,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH_MEMBERS_IN_CHAT
    FETCH_MEMBERS_IN_CHAT_REQUEST: (state) => ({
      ...state,
      fetchMembersInChat: {
        ...state.fetchMembersInChat,
        error: null,
      },
    }),
    FETCH_MEMBERS_IN_CHAT_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchMembersInChat: {
        ...state.fetchMembersInChat,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_MEMBERS_IN_CHAT_FAIL: (state, { payload }) => ({
      ...state,
      fetchMembersInChat: {
        ...state.fetchMembersInChat,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default chatReducer;
