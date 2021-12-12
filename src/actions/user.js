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

// UPDATE INFO USER

const { updateUserInfoRequest, updateUserInfoSuccess, updateUserInfoFail } =
  createActions({
    UPDATE_USER_INFO_REQUEST: () => {},
    UPDATE_USER_INFO_SUCCESS: (data) => ({ data }),
    UPDATE_USER_INFO_FAIL: (error) => ({ error }),
  });

export const updateUserInfo =
  (firstname, lastname, phone, birthday, gender, description, address) =>
  (dispatch) => {
    dispatch(updateUserInfoRequest());
    return Api.User.updateUserInfo(
      firstname,
      lastname,
      phone,
      birthday,
      gender,
      description,
      address
    )
      .then(({ data }) => {
        dispatch(updateUserInfoSuccess(data));
        dispatch(fetchUserById());
        return data;
      })
      .catch((error) => {
        dispatch(updateUserInfoFail(error));
        return Promise.reject(error);
      });
  };

// UPLOAD AVATAR

const { uploadAvatarRequest, uploadAvatarSuccess, uploadAvatarFail } =
  createActions({
    UPLOAD_AVATAR_REQUEST: () => {},
    UPLOAD_AVATAR_SUCCESS: (data) => ({ data }),
    UPLOAD_AVATAR_FAIL: (error) => ({ error }),
  });

export const uploadAvatar = (image) => (dispatch) => {
  dispatch(uploadAvatarRequest());
  return Api.User.uploadAvatar(image)
    .then(({ data }) => {
      dispatch(uploadAvatarSuccess(data));
      dispatch(fetchUserById());
      return data;
    })
    .catch((error) => {
      dispatch(uploadAvatarFail(error));
      return Promise.reject(error);
    });
};

// UPLOAD COVER IMAGE

const {
  uploadCoverImageRequest,
  uploadCoverImageSuccess,
  uploadCoverImageFail,
} = createActions({
  UPLOAD_COVER_IMAGE_REQUEST: () => {},
  UPLOAD_COVER_IMAGE_SUCCESS: (data) => ({ data }),
  UPLOAD_COVER_IMAGE_FAIL: (error) => ({ error }),
});

export const uploadCoverImage = (image) => (dispatch) => {
  dispatch(uploadCoverImageRequest());
  return Api.User.uploadCoverImage(image)
    .then(({ data }) => {
      dispatch(uploadCoverImageSuccess(data));
      dispatch(fetchUserById());
      return data;
    })
    .catch((error) => {
      dispatch(uploadCoverImageFail(error));
      return Promise.reject(error);
    });
};

// FETCH IMAGE BY USENAWE

const {
  fetchImgByUserNameRequest,
  fetchImgByUserNameSuccess,
  fetchImgByUserNameFail,
} = createActions({
  FETCH_IMG_BY_USER_NAME_REQUEST: () => {},
  FETCH_IMG_BY_USER_NAME_SUCCESS: (data) => ({ data }),
  FETCH_IMG_BY_USER_NAME_FAIL: (error) => ({ error }),
});

export const fetchImgByUserName = (username) => (dispatch) => {
  dispatch(fetchImgByUserNameRequest());
  return Api.User.fetchImgByUserName(username)
    .then(({ data }) => {
      dispatch(fetchImgByUserNameSuccess(data));
      // dispatch(fetchUserById());
      return data;
    })
    .catch((error) => {
      dispatch(fetchImgByUserNameFail(error));
      return Promise.reject(error);
    });
};

// FETCH INFO USER BY USERNAME

const { fetchUserByNameRequest, fetchUserByNameSuccess, fetchUserByNameFail } =
  createActions({
    FETCH_USER_BY_NAME_REQUEST: () => {},
    FETCH_USER_BY_NAME_SUCCESS: (data) => ({ data }),
    FETCH_USER_BY_NAME_FAIL: (error) => ({ error }),
  });

export const fetchUserByName = (username) => (dispatch) => {
  dispatch(fetchUserByNameRequest());
  return Api.User.fetchUserByName(username)
    .then(({ data }) => {
      dispatch(fetchUserByNameSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchUserByNameFail(error));
      return Promise.reject(error);
    });
};

// FETCH IMAGE

const { fetchImageRequest, fetchImageSuccess, fetchImageFail } = createActions({
  FETCH_IMAGE_REQUEST: () => {},
  FETCH_IMAGE_SUCCESS: (data) => ({ data }),
  FETCH_IMAGE_FAIL: (error) => ({ error }),
});

export const fetchImage = (image) => (dispatch) => {
  dispatch(fetchImageRequest());
  return Api.User.fetchImage(image)
    .then(({ data }) => {
      dispatch(fetchImageSuccess(data));
      // dispatch(fetchUserById());
      return data;
    })
    .catch((error) => {
      dispatch(fetchImageFail(error));
      return Promise.reject(error);
    });
};
