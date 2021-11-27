import { handleActions } from "redux-actions";

const initialState = {
    verifyAccount: {
        result: [],
        error: null,
        requesting: false,
    },
};

export const userReducer = handleActions({
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

export default userReducer;