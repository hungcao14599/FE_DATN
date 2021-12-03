import { createActions } from "redux-actions";
import Api from "../stores/api";

// VERIFY ACCOUNT

const { addPostRequest, addPostSuccess, addPostFail } = createActions({
    ADD_POST_REQUEST: () => {},
    ADD_POST_SUCCESS: (data) => ({ data }),
    ADD_POST_FAIL: (error) => ({ error }),
});

const { uploadImageRequest, uploadImageSuccess, uploadImageFail } =
createActions({
    UPLOAD_IMAGE_REQUEST: () => {},
    UPLOAD_IMAGE_SUCCESS: (data) => ({ data }),
    UPLOAD_IMAGE_FAIL: (error) => ({ error }),
});

export const addPost =
    (content, type, groupID, isFile, formData) => (dispatch) => {
        dispatch(addPostRequest());
        return Api.Post.addPost(content, type, groupID)
            .then(({ data }) => {
                dispatch(addPostSuccess(data));
                if (isFile) {
                    dispatch(uploadImageRequest());
                    return Api.Post.uploadImage(data.data.id, formData)
                        .then((res) => {
                            dispatch(uploadImageSuccess(res));
                        })
                        .catch((error) => {
                            dispatch(uploadImageFail(error));
                            return Promise.reject(error);
                        });
                } else {
                    dispatch(addPostSuccess(data));
                }
            })
            .catch((error) => {
                dispatch(addPostFail(error));
                return Promise.reject(error);
            });
    };

// FETCH ALL POSTS OF USER

const { fetchAllPostsRequest, fetchAllPostsSuccess, fetchAllPostsFail } =
createActions({
    FETCH_ALL_POSTS_REQUEST: () => {},
    FETCH_ALL_POSTS_SUCCESS: (data) => ({ data }),
    FETCH_ALL_POSTS_FAIL: (error) => ({ error }),
});

export const fetchAllPosts = (size, page) => (dispatch) => {
    dispatch(fetchAllPostsRequest());
    return Api.Post.fetchAllPosts(size, page)
        .then(({ data }) => {
            dispatch(fetchAllPostsSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(fetchAllPostsFail(error));
            return Promise.reject(error);
        });
};

// FETCH POST BY POST ID

const {
    fetchPostByPostIDRequest,
    fetchPostByPostIDSuccess,
    fetchPostByPostIDFail,
} = createActions({
    FETCH_POST_BY_POST_ID_REQUEST: () => {},
    FETCH_POST_BY_POST_ID_SUCCESS: (data) => ({ data }),
    FETCH_POST_BY_POST_ID_FAIL: (error) => ({ error }),
});

export const fetchPostByPostID = (id) => (dispatch) => {
    dispatch(fetchPostByPostIDRequest());
    return Api.Post.fetchPostByPostID(id)
        .then(({ data }) => {
            dispatch(fetchPostByPostIDSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(fetchPostByPostIDFail(error));
            return Promise.reject(error);
        });
};