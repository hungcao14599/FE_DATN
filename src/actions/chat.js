import { createActions } from "redux-actions";
import Api from "../stores/api";

const {
  fetchChatsByUserIdRequest,
  fetchChatsByUserIdSuccess,
  fetchChatsByUserIdFail,
} = createActions({
  FETCH_CHATS_BY_USER_ID_REQUEST: () => {},
  FETCH_CHATS_BY_USER_ID_SUCCESS: (data) => ({ data }),
  FETCH_CHATS_BY_USER_ID_FAIL: (error) => ({ error }),
});

export const fetchChatsByUserId = (size, page, keyword) => (dispatch) => {
  dispatch(fetchChatsByUserIdRequest());
  return Api.Chat.fetchChatsByUserId(size, page, keyword)
    .then(({ data }) => {
      dispatch(fetchChatsByUserIdSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchChatsByUserIdFail(error));
      return Promise.reject(error);
    });
};
