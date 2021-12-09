import { createActions } from "redux-actions";
import Api from "../stores/api";
import { fetchAllPosts } from "./post";

// HANDLE POST MOOD (LIKE)

const { handlePostLikeRequest, handlePostLikeSuccess, handlePostLikeFail } =
  createActions({
    HANDLE_POST_LIKE_REQUEST: () => {},
    HANDLE_POST_LIKE_SUCCESS: (data) => ({ data }),
    HANDLE_POST_LIKE_FAIL: (error) => ({ error }),
  });

export const handlePostLike = (postID) => (dispatch) => {
  dispatch(handlePostLikeRequest());
  return Api.Like.handlePostLike(postID)
    .then(({ data }) => {
      dispatch(handlePostLikeSuccess(data));
      dispatch(fetchAllPosts(20, 1));
      return data;
    })
    .catch((error) => {
      dispatch(handlePostLikeFail(error));
      return Promise.reject(error);
    });
};
