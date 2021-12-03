import { handleActions } from "redux-actions";

const initialState = {
    addCommentToPost: {
        result: [],
        error: null,
        requesting: false,
    },
    fetchCommentByPost: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const commentReducer = handleActions({
        // ADD COMMENT TO POST
        ADD_COMMENT_TO_POST_REQUEST: (state) => ({
            ...state,
            addCommentToPost: {
                ...state.addCommentToPost,
                requesting: true,
                error: null,
            },
        }),
        ADD_COMMENT_TO_POST_SUCCESS: (state, { payload }) => ({
            ...state,
            addCommentToPost: {
                ...state.addCommentToPost,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        ADD_COMMENT_TO_POST_FAIL: (state, { payload }) => ({
            ...state,
            addCommentToPost: {
                ...state.addCommentToPost,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),

        // FETCH COMMENT BY POST
        FETCH_COMMENT_BY_POST_REQUEST: (state) => ({
            ...state,
            fetchCommentByPost: {
                ...state.fetchCommentByPost,
                requesting: true,
                error: null,
            },
        }),
        FETCH_COMMENT_BY_POST_SUCCESS: (state, { payload }) => ({
            ...state,
            fetchCommentByPost: {
                ...state.fetchCommentByPost,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        FETCH_COMMENT_BY_POST_FAIL: (state, { payload }) => ({
            ...state,
            fetchCommentByPost: {
                ...state.fetchCommentByPost,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default commentReducer;