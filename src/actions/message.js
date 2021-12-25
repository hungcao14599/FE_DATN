import { createActions } from "redux-actions";
import Api from "../stores/api";

// CREATE_MESSAGE

const { createMessageRequest, createMessageSuccess, createMessageFail } =
  createActions({
    CREATE_MESSAGE_REQUEST: () => {},
    CREATE_MESSAGE_SUCCESS: (data) => ({ data }),
    CREATE_MESSAGE_FAIL: (error) => ({ error }),
  });

export const createMessage = (response) => (dispatch) => {
  dispatch(createMessageSuccess(response));
  // return Api.Message.createMessage(username, message, chatID)
  //   .then(({ data }) => {
  //     dispatch(createMessageSuccess(data));
  //     return data;
  //   })
  //   .catch((error) => {
  //     dispatch(createMessageFail(error));
  //     return Promise.reject(error);
  //   });
};

const {
  fetchMessageByChatIdRequest,
  fetchMessageByChatIdSuccess,
  fetchMessageByChatIdFail,
} = createActions({
  FETCH_MESSAGE_BY_CHAT_ID_REQUEST: () => {},
  FETCH_MESSAGE_BY_CHAT_ID_SUCCESS: (data) => ({ data }),
  FETCH_MESSAGE_BY_CHAT_ID_FAIL: (error) => ({ error }),
});

export const fetchMessageByChatId = (id, size, page) => (dispatch) => {
  dispatch(fetchMessageByChatIdRequest());
  return Api.Message.fetchMessageByChatId(id, size, page)
    .then(({ data }) => {
      dispatch(fetchMessageByChatIdSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchMessageByChatIdFail(error));
      return Promise.reject(error);
    });
};
