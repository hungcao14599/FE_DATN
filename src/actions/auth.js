import { createActions } from "redux-actions";
import Api from "../stores/api";

// LOGIN ACCOUNT
const { loginUserRequest, loginUserSuccess, loginUserFail } = createActions({
    LOGIN_USER_REQUEST: () => {},
    LOGIN_USER_SUCCESS: (data) => ({ data }),
    LOGIN_USER_FAIL: (error) => ({ error }),
});

export const loginUser = (email, password) => (dispatch) => {
    dispatch(loginUserRequest());
    return Api.Auth.loginUser(email, password)
        .then(({ data }) => {
            dispatch(loginUserSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(loginUserFail(error));
            return Promise.reject(error);
        });
};

//REGISTER ACCOUNT

const { registerUserRequest, registerUserSuccess, registerUserFail } =
createActions({
    REGISTER_USER_REQUEST: () => {},
    REGISTER_USER_SUCCESS: (data) => ({ data }),
    REGISTER_USER_FAIL: (error) => ({ error }),
});

export const registerUser = (username, password, email) => (dispatch) => {
    dispatch(registerUserRequest());
    return Api.Auth.registerUser(username, password, email)
        .then(({ data }) => {
            dispatch(registerUserSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(registerUserFail(error));
            return Promise.reject(error);
        });
};

// VERIFY ACCOUNT

const { verifyAccountRequest, verifyAccountSuccess, verifyAccountFail } =
createActions({
    VERIFY_ACCOUNT_REQUEST: () => {},
    VERIFY_ACCOUNT_SUCCESS: (data) => ({ data }),
    VERIFY_ACCOUNT_FAIL: (error) => ({ error }),
});

export const verifyAccount = (verifyCode, email) => (dispatch) => {
    dispatch(verifyAccountRequest());
    return Api.Auth.verifyAccount(verifyCode, email)
        .then(({ data }) => {
            dispatch(verifyAccountSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(verifyAccountFail(error));
            return Promise.reject(error);
        });
};