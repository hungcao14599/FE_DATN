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

// fetchMembersInChat

const {
  fetchMembersInChatRequest,
  fetchMembersInChatSuccess,
  fetchMembersInChatFail,
} = createActions({
  FETCH_MEMBERS_IN_CHAT_REQUEST: () => {},
  FETCH_MEMBERS_IN_CHAT_SUCCESS: (data) => ({ data }),
  FETCH_MEMBERS_IN_CHAT_FAIL: (error) => ({ error }),
});

export const fetchMembersInChat = (postID) => (dispatch) => {
  dispatch(fetchMembersInChatRequest());
  return Api.Chat.fetchMembersInChat(postID)
    .then(({ data }) => {
      dispatch(fetchMembersInChatSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchMembersInChatFail(error));
      return Promise.reject(error);
    });
};
