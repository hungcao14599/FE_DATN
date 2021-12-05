import { createActions } from "redux-actions";
import Api from "../stores/api";

// fetchAllFriendOfUserByID

const {
    fetchAllFriendOfUserByIdRequest,
    fetchAllFriendOfUserByIdSuccess,
    fetchAllFriendOfUserByIdFail,
} = createActions({
    FETCH_ALL_FRIEND_OF_USER_BY_ID_REQUEST: () => {},
    FETCH_ALL_FRIEND_OF_USER_BY_ID_SUCCESS: (data) => ({ data }),
    FETCH_ALL_FRIEND_OF_USER_BY_ID_FAIL: (error) => ({ error }),
});

export const fetchAllFriendOfUserById = (size, page) => (dispatch) => {
    dispatch(fetchAllFriendOfUserByIdRequest());
    return Api.Friend.fetchAllFriendOfUserById(size, page)
        .then(({ data }) => {
            dispatch(fetchAllFriendOfUserByIdSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(fetchAllFriendOfUserByIdFail(error));
            return Promise.reject(error);
        });
};

// fetchAllUserApprovalById

const {
    fetchAllUserApprovalByIdRequest,
    fetchAllUserApprovalByIdSuccess,
    fetchAllUserApprovalByIdFail,
} = createActions({
    FETCH_ALL_USER_APPROVAL_BY_ID_REQUEST: () => {},
    FETCH_ALL_USER_APPROVAL_BY_ID_SUCCESS: (data) => ({ data }),
    FETCH_ALL_USER_APPROVAL_BY_ID_FAIL: (error) => ({ error }),
});

export const fetchAllUserApprovalById = (size, page) => (dispatch) => {
    dispatch(fetchAllUserApprovalByIdRequest());
    return Api.Friend.fetchAllUserApprovalById(size, page)
        .then(({ data }) => {
            dispatch(fetchAllUserApprovalByIdSuccess(data));
            return data;
        })
        .catch((error) => {
            dispatch(fetchAllUserApprovalByIdFail(error));
            return Promise.reject(error);
        });
};