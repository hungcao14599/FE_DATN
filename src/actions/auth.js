import { createActions } from "redux-actions";
import Api from "../stores/api";

const { loginUserRequest, loginUserSuccess, loginUserFail } = createActions({
  LOGIN_USER_REQUEST: () => {},
  LOGIN_USER_SUCCESS: (data) => ({ data }),
  LOGIN_USER_FAIL: (error) => ({ error }),
});

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginUserRequest());
  return Api.Auth.loginUserRequest(username, password)

    .then(({ data }) => {
      dispatch(loginUserSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(loginUserFail(error));
      return Promise.reject(error);
    });
};
