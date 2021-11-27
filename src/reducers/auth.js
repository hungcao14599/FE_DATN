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
    verifyAccount: {
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

        //VERIFY ACCOUNT
        VERIFY_ACCOUNT_REQUEST: (state) => ({
            ...state,
            verifyAccount: {
                ...state.verifyAccount,
                requesting: true,
                error: null,
            },
        }),
        VERIFY_ACCOUNT_SUCCESS: (state, { payload }) => ({
            ...state,
            verifyAccount: {
                ...state.verifyAccount,
                requesting: false,
                error: null,
                result: payload.data,
            },
        }),
        VERIFY_ACCOUNT_FAIL: (state, { payload }) => ({
            ...state,
            verifyAccount: {
                ...state.verifyAccount,
                requesting: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default authReducer;