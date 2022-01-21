import { handleActions } from "redux-actions";

const initialState = {
    loginUser: {
        result: [],
        error: null,
        loading: false,
    },
    registerUser: {
        result: [],
        error: null,
        loading: false,
    },
};

export const authReducer = handleActions({
        // LOGIN
        LOGIN_USER_REQUEST: (state) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                error: null,
                loading: true,
            },
        }),
        LOGIN_USER_SUCCESS: (state, { payload }) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                loading: false,
                error: null,
                result: payload.data,
            },
        }),
        LOGIN_USER_FAIL: (state, { payload }) => ({
            ...state,
            loginUser: {
                ...state.loginUser,
                loading: false,
                result: null,
                error: payload.error,
            },
        }),
        //REGISTER
        REGISTER_USER_REQUEST: (state) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                loading: true,
                error: null,
            },
        }),
        REGISTER_USER_SUCCESS: (state, { payload }) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                loading: false,
                error: null,
                result: payload.data,
            },
        }),
        REGISTER_USER_FAIL: (state, { payload }) => ({
            ...state,
            registerUser: {
                ...state.registerUser,
                loading: false,
                result: null,
                error: payload.error,
            },
        }),
    },
    initialState
);

export default authReducer;