import { handleActions } from "redux-actions";

const initialState = {
    addPost: {
        result: [],
        error: null,
        requesting: false,
    },
    uploadImage: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const postReducer = handleActions({
        //VERIFY ACCOUNT
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
    },
    initialState
);

export default postReducer;