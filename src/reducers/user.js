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
  fetchImgByUsername: {
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
      fetchImgByUsername: {
        ...state.fetchImgByUsername,
        requesting: true,
        error: null,
      },
    }),
    FETCH_IMG_BY_USER_NAME_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchImgByUsername: {
        ...state.fetchImgByUsername,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_IMG_BY_USER_NAME_FAIL: (state, { payload }) => ({
      ...state,
      fetchImgByUsername: {
        ...state.fetchImgByUsername,
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
  },
  initialState
);

export default userReducer;
