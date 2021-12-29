import { createActions } from "redux-actions";
import Api from "../stores/api";

// ADD GROUP
const { addGroupRequest, addGroupSuccess, addGroupFail } = createActions({
  ADD_GROUP_REQUEST: () => {},
  ADD_GROUP_SUCCESS: (data) => ({ data }),
  ADD_GROUP_FAIL: (error) => ({ error }),
});

export const addGroup = (name, description, caption) => (dispatch) => {
  dispatch(addGroupRequest());
  return Api.Group.addGroup(name, description, caption)
    .then(({ data }) => {
      dispatch(addGroupSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(addGroupFail(error));
      return Promise.reject(error);
    });
};

// FETCH ALL GROUP BY ID
const {
  fetchGroupsOfUserRequest,
  fetchGroupsOfUserSuccess,
  fetchGroupsOfUserFail,
} = createActions({
  FETCH_GROUPS_OF_USER_REQUEST: () => {},
  FETCH_GROUPS_OF_USER_SUCCESS: (data) => ({ data }),
  FETCH_GROUPS_OF_USER_FAIL: (error) => ({ error }),
});

export const fetchGroupsOfUser =
  ({ size, page, keyword }) =>
  (dispatch) => {
    dispatch(fetchGroupsOfUserRequest());
    return Api.Group.fetchGroupsOfUser({ size, page, keyword })
      .then(({ data }) => {
        dispatch(fetchGroupsOfUserSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchGroupsOfUserFail(error));
        return Promise.reject(error);
      });
  };

// FETCH ALL OTHER GROUP BY ID
const {
  fetchOtherGroupsOfUserRequest,
  fetchOtherGroupsOfUserSuccess,
  fetchOtherGroupsOfUserFail,
} = createActions({
  FETCH_OTHER_GROUPS_OF_USER_REQUEST: () => {},
  FETCH_OTHER_GROUPS_OF_USER_SUCCESS: (data) => ({ data }),
  FETCH_OTHER_GROUPS_OF_USER_FAIL: (error) => ({ error }),
});

export const fetchOtherGroupsOfUser =
  ({ size, page, keyword }) =>
  (dispatch) => {
    dispatch(fetchOtherGroupsOfUserRequest());
    return Api.Group.fetchOtherGroupsOfUser({ size, page, keyword })
      .then(({ data }) => {
        dispatch(fetchOtherGroupsOfUserSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchOtherGroupsOfUserFail(error));
        return Promise.reject(error);
      });
  };

// FETCH GROUP BY ID
const { fetchGroupByIdRequest, fetchGroupByIdSuccess, fetchGroupByIdFail } =
  createActions({
    FETCH_GROUP_BY_ID_REQUEST: () => {},
    FETCH_GROUP_BY_ID_SUCCESS: (data) => ({ data }),
    FETCH_GROUP_BY_ID_FAIL: (error) => ({ error }),
  });

export const fetchGroupById = (id) => (dispatch) => {
  dispatch(fetchGroupByIdRequest());
  return Api.Group.fetchGroupById(id)
    .then(({ data }) => {
      dispatch(fetchGroupByIdSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchGroupByIdFail(error));
      return Promise.reject(error);
    });
};

// FETCH USER JOIN GROUP
const {
  fetchUserJoinGroupRequest,
  fetchUserJoinGroupSuccess,
  fetchUserJoinGroupFail,
} = createActions({
  FETCH_USER_JOIN_GROUP_REQUEST: () => {},
  FETCH_USER_JOIN_GROUP_SUCCESS: (data) => ({ data }),
  FETCH_USER_JOIN_GROUP_FAIL: (error) => ({ error }),
});

export const fetchUserJoinGroup =
  ({ id, size, page, keyword }) =>
  (dispatch) => {
    dispatch(fetchUserJoinGroupRequest());
    return Api.Group.fetchUserJoinGroup({ id, size, page, keyword })
      .then(({ data }) => {
        dispatch(fetchUserJoinGroupSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchUserJoinGroupFail(error));
        return Promise.reject(error);
      });
  };

// USER JOIN GROUP
const { userJoinGroupRequest, userJoinGroupSuccess, userJoinGroupFail } =
  createActions({
    USER_JOIN_GROUP_REQUEST: () => {},
    USER_JOIN_GROUP_SUCCESS: (data) => ({ data }),
    USER_JOIN_GROUP_FAIL: (error) => ({ error }),
  });

export const userJoinGroup = (id) => (dispatch) => {
  dispatch(userJoinGroupRequest());
  return Api.Group.userJoinGroup(id)
    .then(({ data }) => {
      dispatch(userJoinGroupSuccess(data));
      dispatch(fetchOtherGroupsOfUser({ size: 20, page: 1, keyword: "" }));
      return data;
    })
    .catch((error) => {
      dispatch(userJoinGroupFail(error));
      return Promise.reject(error);
    });
};

// FETCH MEMBER JOIN GROUP
const {
  fetchMemberJoinGroupRequest,
  fetchMemberJoinGroupSuccess,
  fetchMemberJoinGroupFail,
} = createActions({
  FETCH_MEMBER_JOIN_GROUP_REQUEST: () => {},
  FETCH_MEMBER_JOIN_GROUP_SUCCESS: (data) => ({ data }),
  FETCH_MEMBER_JOIN_GROUP_FAIL: (error) => ({ error }),
});

export const fetchMemberJoinGroup =
  ({ id, size, page, keyword }) =>
  (dispatch) => {
    dispatch(fetchMemberJoinGroupRequest());
    return Api.Group.fetchMemberJoinGroup({ id, size, page, keyword })
      .then(({ data }) => {
        dispatch(fetchMemberJoinGroupSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchMemberJoinGroupFail(error));
        return Promise.reject(error);
      });
  };

// GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP
const {
  groupAdminApprovalUserJoinGroupRequest,
  groupAdminApprovalUserJoinGroupSuccess,
  groupAdminApprovalUserJoinGroupFail,
} = createActions({
  GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_REQUEST: () => {},
  GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_SUCCESS: (data) => ({ data }),
  GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_FAIL: (error) => ({ error }),
});

export const groupAdminApprovalUserJoinGroup =
  (userID, groupID, isApproval) => (dispatch) => {
    dispatch(groupAdminApprovalUserJoinGroupRequest());
    return Api.Group.groupAdminApprovalUserJoinGroup(
      userID,
      groupID,
      isApproval
    )
      .then(({ data }) => {
        dispatch(groupAdminApprovalUserJoinGroupSuccess(data));
        dispatch(
          fetchMemberJoinGroup({ id: userID, size: 20, page: 1, keyword: "" })
        );
        return data;
      })
      .catch((error) => {
        dispatch(groupAdminApprovalUserJoinGroupFail(error));
        return Promise.reject(error);
      });
  };

// FETCH MEMBER IN GROUP
const {
  fetchMemberInGroupRequest,
  fetchMemberInGroupSuccess,
  fetchMemberInGroupFail,
} = createActions({
  FETCH_MEMBER_IN_GROUP_REQUEST: () => {},
  FETCH_MEMBER_IN_GROUP_SUCCESS: (data) => ({ data }),
  FETCH_MEMBER_IN_GROUP_FAIL: (error) => ({ error }),
});

export const fetchMemberInGroup =
  ({ groupID, size, page, keyword }) =>
  (dispatch) => {
    dispatch(fetchMemberInGroupRequest());
    return Api.Group.fetchMemberInGroup({ groupID, size, page, keyword })
      .then(({ data }) => {
        dispatch(fetchMemberInGroupSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchMemberInGroupFail(error));
        return Promise.reject(error);
      });
  };

// FETCH ALL GROUPS
const { fetchAllGroupsRequest, fetchAllGroupsSuccess, fetchAllGroupsFail } =
  createActions({
    FETCH_ALL_GROUPS_REQUEST: () => {},
    FETCH_ALL_GROUPS_SUCCESS: (data) => ({ data }),
    FETCH_ALL_GROUPS_FAIL: (error) => ({ error }),
  });

export const fetchAllGroups = () => (dispatch) => {
  dispatch(fetchAllGroupsRequest());
  return Api.Group.fetchAllGroups()
    .then(({ data }) => {
      dispatch(fetchAllGroupsSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchAllGroupsFail(error));
      return Promise.reject(error);
    });
};
