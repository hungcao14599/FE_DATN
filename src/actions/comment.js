import { createActions } from "redux-actions";
import Api from "../stores/api";

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