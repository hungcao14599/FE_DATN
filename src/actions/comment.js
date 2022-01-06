import { createActions } from "redux-actions";
import Api from "../stores/api";
import { fetchAllPosts } from "./post";

// ADD COMMENTS TO POST

const {
  addCommentToPostRequest,
  addCommentToPostSuccess,
  addCommentToPostFail,
} = createActions({
  ADD_COMMENT_TO_POST_REQUEST: () => {},
  ADD_COMMENT_TO_POST_SUCCESS: (data) => ({ data }),
  ADD_COMMENT_TO_POST_FAIL: (error) => ({ error }),
});

export const addCommentToPost = (content, postID) => (dispatch) => {
  dispatch(addCommentToPostRequest());
  return Api.Comment.addCommentToPost(content, postID)
    .then(({ data }) => {
      dispatch(addCommentToPostSuccess(data));
      dispatch(fetchAllPosts(20, 1));
      return data;
    })
    .catch((error) => {
      dispatch(addCommentToPostFail(error));
      return Promise.reject(error);
    });
};

// FETCH COMMENT BY POST

const {
  fetchCommentByPostRequest,
  fetchCommentByPostSuccess,
  fetchCommentByPostFail,
} = createActions({
  FETCH_COMMENT_BY_POST_REQUEST: () => {},
  FETCH_COMMENT_BY_POST_SUCCESS: (data) => ({ data }),
  FETCH_COMMENT_BY_POST_FAIL: (error) => ({ error }),
});

export const fetchCommentByPost = (groupID, size, page) => (dispatch) => {
  dispatch(fetchCommentByPostRequest());
  return Api.Comment.fetchCommentByPost(groupID, size, page)
    .then(({ data }) => {
      dispatch(fetchCommentByPostSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchCommentByPostFail(error));
      return Promise.reject(error);
    });
};

// REMOVE COMMENTS TO POST

const {
  removeCommentOfPostRequest,
  removeCommentOfPostSuccess,
  removeCommentOfPostFail,
} = createActions({
  REMOVE_COMMENT_OF_POST_REQUEST: () => {},
  REMOVE_COMMENT_OF_POST_SUCCESS: (data) => ({ data }),
  REMOVE_COMMENT_OF_POST_FAIL: (error) => ({ error }),
});

export const removeCommentOfPost = (id) => (dispatch) => {
  dispatch(removeCommentOfPostRequest());
  return Api.Comment.removeCommentOfPost(id)
    .then(({ data }) => {
      dispatch(removeCommentOfPostSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(removeCommentOfPostFail(error));
      return Promise.reject(error);
    });
};

// REMOVE COMMENTS TO POST

const {
  updateCommentOfPostRequest,
  updateCommentOfPostSuccess,
  updateCommentOfPostFail,
} = createActions({
  UPDATE_COMMENT_OF_POST_REQUEST: () => {},
  UPDATE_COMMENT_OF_POST_SUCCESS: (data) => ({ data }),
  UPDATE_COMMENT_OF_POST_FAIL: (error) => ({ error }),
});

export const updateCommentOfPost = (id, content) => (dispatch) => {
  dispatch(updateCommentOfPostRequest());
  return Api.Comment.updateCommentOfPost(id, content)
    .then(({ data }) => {
      dispatch(updateCommentOfPostSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(updateCommentOfPostFail(error));
      return Promise.reject(error);
    });
};
