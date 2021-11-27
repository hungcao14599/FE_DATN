import { handleActions } from "redux-actions";

const initialState = {
    loginUser: {
        result: [],
        error: null,
        requesting: false,
    },
    registerUser: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const authReducer = handleActions({
        // LOGIN
        LOGIN_USER_REQUEST: (state) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                requesting: true,
                error: null,
            },
        }),
        LOGIN_USER_SUCCESS: (state, { payload }) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        LOGIN_USER_FAIL: (state, { payload }) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
        //REGISTER
        REGISTER_USER_REQUEST: (state) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                requesting: true,
                error: null,
            },
        }),
        REGISTER_USER_SUCCESS: (state, { payload }) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        REGISTER_USER_FAIL: (state, { payload }) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default authReducer;