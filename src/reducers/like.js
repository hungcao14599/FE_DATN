import { handleActions } from "redux-actions";

const initialState = {
    handlePostLike: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const likeReducer = handleActions({
        // HANDLE POST MOOD (LIKE)
        HANDLE_POST_MOOD_REQUEST: (state) => ({
            ...state,
            handlePostLike: {
                ...state.handlePostLike,
                requesting: true,
                error: null,
            },
        }),
        HANDLE_POST_MOOD_SUCCESS: (state, { payload }) => ({
            ...state,
            handlePostLike: {
                ...state.handlePostLike,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        HANDLE_POST_MOOD_FAIL: (state, { payload }) => ({
            ...state,
            handlePostLike: {
                ...state.handlePostLike,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default likeReducer;