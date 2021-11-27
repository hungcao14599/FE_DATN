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