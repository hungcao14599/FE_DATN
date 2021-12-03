import { createActions } from "redux-actions";
import Api from "../stores/api";

// VERIFY ACCOUNT

const { verifyAccountRequest, verifyAccountSuccess, verifyAccountFail } =
createActions({
    VERIFY_ACCOUNT_REQUEST: () => {},
    VERIFY_ACCOUNT_SUCCESS: (data) => ({ data }),
    VERIFY_ACCOUNT_FAIL: (error) => ({ error }),
});

export const verifyAccount = (verifyCode, email) => (dispatch) => {
    dispatch(verifyAccountRequest());
    return Api.User.verifyAccount(verifyCode, email)
        .then(({ data }) => {
            dispatch(verifyAccountSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(verifyAccountFail(error));
            return Promise.reject(error);
        });
};

// FECTCH USER

const { fetchUserByIdRequest, fetchUserByIdSuccess, fetchUserByIdFail } =
createActions({
    FETCH_USER_BY_ID_REQUEST: () => {},
    FETCH_USER_BY_ID_SUCCESS: (data) => ({ data }),
    FETCH_USER_BY_ID_FAIL: (error) => ({ error }),
});

export const fetchUserById = () => (dispatch) => {
    dispatch(fetchUserByIdRequest());
    return Api.User.fetchUserByID()
        .then(({ data }) => {
            dispatch(fetchUserByIdSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(fetchUserByIdFail(error));
            return Promise.reject(error);
        });
};