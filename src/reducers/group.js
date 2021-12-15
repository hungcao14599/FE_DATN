import { handleActions } from "redux-actions";

const initialState = {
  addGroup: {
    result: [],
    error: null,
    requesting: false,
  },

  fetchGroupsOfUser: {
    result: [],
    error: null,
    requesting: false,
  },

  fetchOtherGroupsOfUser: {
    result: [],
    error: null,
    requesting: false,
  },

  fetchGroupById: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchUserJoinGroup: {
    result: [],
    error: null,
    requesting: false,
  },
  userJoinGroup: {
    result: [],
    error: null,
    requesting: false,
  },

  fetchMemberJoinGroup: {
    result: [],
    error: null,
    requesting: false,
  },

  fetchMemberInGroup: {
    result: [],
    error: null,
    requesting: false,
  },

  groupAdminApprovalUserJoinGroup: {
    result: [],
    error: null,
    requesting: false,
  },
};

export const groupReducer = handleActions(
  {
    // ADD GROUP
    ADD_GROUP_REQUEST: (state) => ({
      ...state,
      addGroup: {
        ...state.addGroup,
        requesting: true,
        error: null,
      },
    }),
    ADD_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      addGroup: {
        ...state.addGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    ADD_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      addGroup: {
        ...state.addGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL GROUP BY ID
    FETCH_GROUPS_OF_USER_REQUEST: (state) => ({
      ...state,
      fetchGroupsOfUser: {
        ...state.fetchGroupsOfUser,
        requesting: true,
        error: null,
      },
    }),
    FETCH_GROUPS_OF_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchGroupsOfUser: {
        ...state.fetchGroupsOfUser,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_GROUPS_OF_USER_FAIL: (state, { payload }) => ({
      ...state,
      fetchGroupsOfUser: {
        ...state.fetchGroupsOfUser,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH OTHER ALL GROUP BY ID
    FETCH_OTHER_GROUPS_OF_USER_REQUEST: (state) => ({
      ...state,
      fetchOtherGroupsOfUser: {
        ...state.fetchOtherGroupsOfUser,
        requesting: true,
        error: null,
      },
    }),
    FETCH_OTHER_GROUPS_OF_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchOtherGroupsOfUser: {
        ...state.fetchOtherGroupsOfUser,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_OTHER_GROUPS_OF_USER_FAIL: (state, { payload }) => ({
      ...state,
      fetchOtherGroupsOfUser: {
        ...state.fetchOtherGroupsOfUser,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH GROUP BY ID
    FETCH_GROUP_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchGroupById: {
        ...state.fetchGroupById,
        requesting: true,
        error: null,
      },
    }),
    FETCH_GROUP_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchGroupById: {
        ...state.fetchGroupById,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_GROUP_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchGroupById: {
        ...state.fetchGroupById,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH USER JOIN GROUP
    FETCH_USER_JOIN_GROUP_REQUEST: (state) => ({
      ...state,
      fetchUserJoinGroup: {
        ...state.fetchUserJoinGroup,
        requesting: true,
        error: null,
      },
    }),
    FETCH_USER_JOIN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchUserJoinGroup: {
        ...state.fetchUserJoinGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_USER_JOIN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      fetchUserJoinGroup: {
        ...state.fetchUserJoinGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // USER JOIN GROUP
    USER_JOIN_GROUP_REQUEST: (state) => ({
      ...state,
      userJoinGroup: {
        ...state.userJoinGroup,
        requesting: true,
        error: null,
      },
    }),
    USER_JOIN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      userJoinGroup: {
        ...state.userJoinGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    USER_JOIN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      userJoinGroup: {
        ...state.userJoinGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // USER JOIN GROUP
    FETCH_MEMBER_JOIN_GROUP_REQUEST: (state) => ({
      ...state,
      fetchMemberJoinGroup: {
        ...state.fetchMemberJoinGroup,
        requesting: true,
        error: null,
      },
    }),
    FETCH_MEMBER_JOIN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchMemberJoinGroup: {
        ...state.fetchMemberJoinGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_MEMBER_JOIN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      fetchMemberJoinGroup: {
        ...state.fetchMemberJoinGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // USER JOIN GROUP
    GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_REQUEST: (state) => ({
      ...state,
      groupAdminApprovalUserJoinGroup: {
        ...state.groupAdminApprovalUserJoinGroup,
        requesting: true,
        error: null,
      },
    }),
    GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      groupAdminApprovalUserJoinGroup: {
        ...state.groupAdminApprovalUserJoinGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    GROUP_ADMIN_APPROVAL_USER_JOIN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      groupAdminApprovalUserJoinGroup: {
        ...state.groupAdminApprovalUserJoinGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // USER JOIN GROUP
    FETCH_MEMBER_IN_GROUP_REQUEST: (state) => ({
      ...state,
      fetchMemberInGroup: {
        ...state.fetchMemberInGroup,
        requesting: true,
        error: null,
      },
    }),
    FETCH_MEMBER_IN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchMemberInGroup: {
        ...state.fetchMemberInGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_MEMBER_IN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      fetchMemberInGroup: {
        ...state.fetchMemberInGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default groupReducer;
