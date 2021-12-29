import { handleActions } from "redux-actions";

const initialState = {
  createMessage: {
    result: [],
    error: null,
  },
  fetchMessageByChatId: {
    result: [],
    error: null,
  },
};

export const messageReducer = handleActions(
  {
    // CREATE MESSAGE
    CREATE_MESSAGE_REQUEST: (state) => ({
      ...state,
      createMessage: {
        ...state.createMessage,
        error: null,
      },
    }),
    CREATE_MESSAGE_SUCCESS: (state, { payload }) => {
      return {
        ...state,
        createMessage: {
          ...state.createMessage,
          error: null,
          result: payload.data,
        },
        fetchMessageByChatId: {
          ...state.fetchMessageByChatId,
          result: {
            data: {
              data: [
                ...(state.fetchMessageByChatId.result.data.data || []),
                payload.data,
              ],
            },
          },
        },
      };
    },
    CREATE_MESSAGE_FAIL: (state, { payload }) => ({
      ...state,
      createMessage: {
        ...state.createMessage,
        result: null,
        error: payload.error,
      },
    }),

    // CREATE MESSAGE
    FETCH_MESSAGE_BY_CHAT_ID_REQUEST: (state) => ({
      ...state,
      fetchMessageByChatId: {
        ...state.fetchMessageByChatId,
        error: null,
      },
    }),
    FETCH_MESSAGE_BY_CHAT_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchMessageByChatId: {
        ...state.fetchMessageByChatId,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_MESSAGE_BY_CHAT_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchMessageByChatId: {
        ...state.fetchMessageByChatId,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default messageReducer;
