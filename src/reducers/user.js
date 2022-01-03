import { handleActions } from "redux-actions";

const initialState = {
  verifyAccount: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchUserByID: {
    result: [],
    error: null,
    requesting: false,
  },
  updateUserInfo: {
    result: [],
    error: null,
    requesting: false,
  },
  uploadAvatar: {
    result: [],
    error: null,
    requesting: false,
  },
  uploadCoverImage: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchImgByUserName: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchImage: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchUserByName: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllUsers: {
    result: [],
    error: null,
  },
  setBlockUser: {
    result: [],
    error: null,
  },
  setUnBlockUser: {
    result: [],
    error: null,
  },
  fetchNumOfUserByMonth: {
    result: [],
    error: null,
  },
};

export const userReducer = handleActions(
  {
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

    //FETCH USER BY ID
    FETCH_USER_BY_ID_REQUEST: (state) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: true,
        error: null,
      },
    }),
    FETCH_USER_BY_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_USER_BY_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchUserByID: {
        ...state.fetchUserByID,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH USER BY ID
    UPDATE_USER_INFO_REQUEST: (state) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: true,
        error: null,
      },
    }),
    UPDATE_USER_INFO_SUCCESS: (state, { payload }) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPDATE_USER_INFO_FAIL: (state, { payload }) => ({
      ...state,
      updateUserInfo: {
        ...state.updateUserInfo,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // UPLOAD AVATAR
    UPLOAD_AVATAR_REQUEST: (state) => ({
      ...state,
      uploadAvatar: {
        ...state.uploadAvatar,
        requesting: true,
        error: null,
      },
    }),
    UPLOAD_AVATAR_SUCCESS: (state, { payload }) => ({
      ...state,
      uploadAvatar: {
        ...state.uploadAvatar,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPLOAD_AVATAR_FAIL: (state, { payload }) => ({
      ...state,
      uploadAvatar: {
        ...state.uploadAvatar,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // UPLOAD COVER IMAGE
    UPLOAD_COVER_IMAGE_REQUEST: (state) => ({
      ...state,
      uploadCoverImage: {
        ...state.uploadCoverImage,
        requesting: true,
        error: null,
      },
    }),
    UPLOAD_COVER_IMAGE_SUCCESS: (state, { payload }) => ({
      ...state,
      uploadCoverImage: {
        ...state.uploadCoverImage,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPLOAD_COVER_IMAGE_FAIL: (state, { payload }) => ({
      ...state,
      uploadCoverImage: {
        ...state.uploadCoverImage,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH IMAGE BY USERNAME
    FETCH_IMG_BY_USER_NAME_REQUEST: (state) => ({
      ...state,
      fetchImgByUserName: {
        ...state.fetchImgByUserName,
        requesting: true,
        error: null,
      },
    }),
    FETCH_IMG_BY_USER_NAME_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchImgByUserName: {
        ...state.fetchImgByUserName,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_IMG_BY_USER_NAME_FAIL: (state, { payload }) => ({
      ...state,
      fetchImgByUserName: {
        ...state.fetchImgByUserName,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH_USER_BY_NAME
    FETCH_USER_BY_NAME_REQUEST: (state) => ({
      ...state,
      fetchUserByName: {
        ...state.fetchUserByName,
        requesting: true,
        error: null,
      },
    }),
    FETCH_USER_BY_NAME_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchUserByName: {
        ...state.fetchUserByName,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_USER_BY_NAME_FAIL: (state, { payload }) => ({
      ...state,
      fetchUserByName: {
        ...state.fetchUserByName,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH IMAGE
    FETCH_IMAGE_REQUEST: (state) => ({
      ...state,
      fetchImage: {
        ...state.fetchImage,
        requesting: true,
        error: null,
      },
    }),
    FETCH_IMAGE_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchImage: {
        ...state.fetchImage,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_IMAGE_FAIL: (state, { payload }) => ({
      ...state,
      fetchImage: {
        ...state.fetchImage,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH ALL USERS
    FETCH_ALL_USERS_REQUEST: (state) => ({
      ...state,
      fetchAllUsers: {
        ...state.fetchAllUsers,
        error: null,
      },
    }),
    FETCH_ALL_USERS_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllUsers: {
        ...state.fetchAllUsers,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_USERS_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllUsers: {
        ...state.fetchAllUsers,
        result: null,
        error: payload.error,
      },
    }),

    //SET_BLOCK_USER
    SET_BLOCK_USER_REQUEST: (state) => ({
      ...state,
      setBlockUser: {
        ...state.setBlockUser,
        error: null,
      },
    }),
    SET_BLOCK_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      setBlockUser: {
        ...state.setBlockUser,
        error: null,
        result: payload.data,
      },
    }),
    SET_BLOCK_USER_FAIL: (state, { payload }) => ({
      ...state,
      setBlockUser: {
        ...state.setBlockUser,
        result: null,
        error: payload.error,
      },
    }),

    //SET_UNBLOCK_USER
    SET_UN_BLOCK_USER_REQUEST: (state) => ({
      ...state,
      setUnBlockUser: {
        ...state.setUnBlockUser,
        error: null,
      },
    }),
    SET_UN_BLOCK_USER_SUCCESS: (state, { payload }) => ({
      ...state,
      setUnBlockUser: {
        ...state.setUnBlockUser,
        error: null,
        result: payload.data,
      },
    }),
    SET_UN_BLOCK_USER_FAIL: (state, { payload }) => ({
      ...state,
      setUnBlockUser: {
        ...state.setUnBlockUser,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH_NUM_OF_USER_BY_MONTH
    FETCH_NUM_OF_USER_BY_MONTH_REQUEST: (state) => ({
      ...state,
      fetchNumOfUserByMonth: {
        ...state.fetchNumOfUserByMonth,
        error: null,
      },
    }),
    FETCH_NUM_OF_USER_BY_MONTH_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchNumOfUserByMonth: {
        ...state.fetchNumOfUserByMonth,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_NUM_OF_USER_BY_MONTH_FAIL: (state, { payload }) => ({
      ...state,
      fetchNumOfUserByMonth: {
        ...state.fetchNumOfUserByMonth,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default userReducer;
