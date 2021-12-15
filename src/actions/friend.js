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

// Approval Friend

const { approvalFriendRequest, approvalFriendSuccess, approvalFriendFail } =
  createActions({
    APPROVAL_FRIEND_REQUEST: () => {},
    APPROVAL_FRIEND_SUCCESS: (data) => ({ data }),
    APPROVAL_FRIEND_FAIL: (error) => ({ error }),
  });

export const approvalFriend = (friend, isApproval) => (dispatch) => {
  dispatch(approvalFriendRequest());
  return Api.Friend.approvalFriend(friend, isApproval)
    .then(({ data }) => {
      dispatch(approvalFriendSuccess(data));
      dispatch(fetchAllFriendOfUserById(20, 1));
      return data;
    })
    .catch((error) => {
      dispatch(approvalFriendFail(error));
      return Promise.reject(error);
    });
};

// Add Friend

const { addFriendRequest, addFriendSuccess, addFriendFail } = createActions({
  ADD_FRIEND_REQUEST: () => {},
  ADD_FRIEND_SUCCESS: (data) => ({ data }),
  ADD_FRIEND_FAIL: (error) => ({ error }),
});

export const addFriend = (userID) => (dispatch) => {
  dispatch(addFriendRequest());
  return Api.Friend.addFriend(userID)
    .then(({ data }) => {
      dispatch(addFriendSuccess(data));
      //   dispatch(fetchAllFriendOfUserById(20, 1));
      return data;
    })
    .catch((error) => {
      dispatch(addFriendFail(error));
      return Promise.reject(error);
    });
};
