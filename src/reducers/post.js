import { handleActions } from "redux-actions";

const initialState = {
    addPost: {
        result: [],
        error: null,
        requesting: false,
    },
    removePost: {
        result: [],
        error: null,
        requesting: false,
    },
    uploadImage: {
        result: [],
        error: null,
        requesting: false,
    },
    fetchAllPosts: {
        result: [],
        error: null,
        requesting: false,
    },
    fetchPostByPostID: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const postReducer = handleActions({
        //ADD POST
        ADD_POST_REQUEST: (state) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: true,
                error: null,
            },
        }),
        ADD_POST_SUCCESS: (state, { payload }) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        ADD_POST_FAIL: (state, { payload }) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
        //UPLOAD IMAGE
        UPLOAD_IMAGE_REQUEST: (state) => ({
            ...state,
            uploadImage: {
                ...state.uploadImage,
                requesting: true,
                error: null,
            },
        }),
        UPLOAD_IMAGE_SUCCESS: (state, { payload }) => ({
            ...state,
            uploadImage: {
                ...state.uploadImage,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        UPLOAD_IMAGE_FAIL: (state, { payload }) => ({
            ...state,
            uploadImage: {
                ...state.uploadImage,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),

        // FETCH ALL POST REQUEST
        FETCH_ALL_POSTS_REQUEST: (state) => ({
            ...state,
            fetchAllPosts: {
                ...state.fetchAllPosts,
                requesting: true,
                error: null,
            },
        }),
        FETCH_ALL_POSTS_SUCCESS: (state, { payload }) => ({
            ...state,
            fetchAllPosts: {
                ...state.fetchAllPosts,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        FETCH_ALL_POSTS_FAIL: (state, { payload }) => ({
            ...state,
            fetchAllPosts: {
                ...state.fetchAllPosts,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),

        //FETCH POST BY POST ID
        FETCH_POST_BY_POST_ID_REQUEST: (state) => ({
            ...state,
            fetchPostByPostID: {
                ...state.fetchPostByPostID,
                requesting: true,
                error: null,
            },
        }),
        FETCH_POST_BY_POST_ID_SUCCESS: (state, { payload }) => ({
            ...state,
            fetchPostByPostID: {
                ...state.fetchPostByPostID,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        FETCH_POST_BY_POST_ID_FAIL: (state, { payload }) => ({
            ...state,
            fetchPostByPostID: {
                ...state.fetchPostByPostID,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),

        //REMOVE POST
        REMOVE_POST_REQUEST: (state) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: true,
                error: null,
            },
        }),
        REMOVE_POST_SUCCESS: (state, { payload }) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        REMOVE_POST_FAIL: (state, { payload }) => ({
            ...state,
            addPost: {
                ...state.addPost,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default postReducer;