import { createActions } from "redux-actions";
import Api from "../stores/api";
import { fetchImgByUserName } from "./user";

// VERIFY ACCOUNT

const { addPostRequest, addPostSuccess, addPostFail } = createActions({
  ADD_POST_REQUEST: () => {},
  ADD_POST_SUCCESS: (data) => ({ data }),
  ADD_POST_FAIL: (error) => ({ error }),
});

const { uploadImageRequest, uploadImageSuccess, uploadImageFail } =
  createActions({
    UPLOAD_IMAGE_REQUEST: () => {},
    UPLOAD_IMAGE_SUCCESS: (data) => ({ data }),
    UPLOAD_IMAGE_FAIL: (error) => ({ error }),
  });

export const addPost =
  (content, type, groupID, isFile, formData) => (dispatch) => {
    dispatch(addPostRequest());
    return Api.Post.addPost(content, type, groupID)
      .then(({ data }) => {
        dispatch(addPostSuccess(data));
        dispatch(fetchAllPosts(20, 1));
        dispatch(fetchAllPostByGroupId({ groupID, size: 20, page: 1 }));

        if (isFile) {
          dispatch(uploadImageRequest());
          return Api.Post.uploadImage(data.data.id, formData)
            .then((res) => {
              dispatch(uploadImageSuccess(res));
              dispatch(fetchAllPosts(20, 1));
              dispatch(fetchAllPostByGroupId({ groupID, size: 20, page: 1 }));
            })
            .catch((error) => {
              dispatch(uploadImageFail(error));
              return Promise.reject(error);
            });
        } else {
          dispatch(addPostSuccess(data));
        }
      })
      .catch((error) => {
        dispatch(addPostFail(error));
        return Promise.reject(error);
      });
  };

// UPDATE POST
const { updatePostRequest, updatePostSuccess, updatePostFail } = createActions({
  UPDATE_POST_REQUEST: () => {},
  UPDATE_POST_SUCCESS: (data) => ({ data }),
  UPDATE_POST_FAIL: (error) => ({ error }),
});

export const updatePost =
  (id, content, images, isFile, formData) => (dispatch) => {
    dispatch(updatePostRequest());
    return Api.Post.updatePost(id, content, images)
      .then(({ data }) => {
        dispatch(updatePostSuccess(data));
        dispatch(fetchAllPosts(20, 1));

        if (isFile) {
          dispatch(uploadImageRequest());
          return Api.Post.uploadImage(data.data.id, formData)
            .then((res) => {
              dispatch(uploadImageSuccess(res));
              dispatch(fetchAllPosts(20, 1));
            })
            .catch((error) => {
              dispatch(uploadImageFail(error));
              return Promise.reject(error);
            });
        } else {
          dispatch(updatePostSuccess(data));
        }
      })
      .catch((error) => {
        dispatch(updatePostFail(error));
        return Promise.reject(error);
      });
  };

// FETCH ALL POSTS OF USER

const { fetchAllPostsRequest, fetchAllPostsSuccess, fetchAllPostsFail } =
  createActions({
    FETCH_ALL_POSTS_REQUEST: () => {},
    FETCH_ALL_POSTS_SUCCESS: (data) => ({ data }),
    FETCH_ALL_POSTS_FAIL: (error) => ({ error }),
  });

export const fetchAllPosts = (size, page) => (dispatch) => {
  dispatch(fetchAllPostsRequest());
  return Api.Post.fetchAllPosts(size, page)
    .then(({ data }) => {
      dispatch(fetchAllPostsSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchAllPostsFail(error));
      return Promise.reject(error);
    });
};

// FETCH ALL POSTS IN GROUP

const {
  fetchAllPostsInGroupRequest,
  fetchAllPostsInGroupSuccess,
  fetchAllPostsInGroupFail,
} = createActions({
  FETCH_ALL_POSTS_IN_GROUP_REQUEST: () => {},
  FETCH_ALL_POSTS_IN_GROUP_SUCCESS: (data) => ({ data }),
  FETCH_ALL_POSTS_IN_GROUP_FAIL: (error) => ({ error }),
});

export const fetchAllPostsInGroup = (size, page) => (dispatch) => {
  dispatch(fetchAllPostsInGroupRequest());
  return Api.Post.fetchAllPostsInGroup(size, page)
    .then(({ data }) => {
      dispatch(fetchAllPostsInGroupSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchAllPostsInGroupFail(error));
      return Promise.reject(error);
    });
};

// FETCH ALL POSTS BY USERNAME

const {
  fetchAllPostsByUserNameRequest,
  fetchAllPostsByUserNameSuccess,
  fetchAllPostsByUserNameFail,
} = createActions({
  FETCH_ALL_POSTS_BY_USER_NAME_REQUEST: () => {},
  FETCH_ALL_POSTS_BY_USER_NAME_SUCCESS: (data) => ({ data }),
  FETCH_ALL_POSTS_BY_USER_NAME_FAIL: (error) => ({ error }),
});

export const fetchAllPostsByUserName = (username, size, page) => (dispatch) => {
  dispatch(fetchAllPostsByUserNameRequest());
  return Api.Post.fetchAllPostsByUserName(username, size, page)
    .then(({ data }) => {
      dispatch(fetchAllPostsByUserNameSuccess(data));
      dispatch(fetchImgByUserName(username));
      return data;
    })
    .catch((error) => {
      dispatch(fetchAllPostsByUserNameFail(error));
      return Promise.reject(error);
    });
};

// FETCH POST BY POST ID

const {
  fetchPostByPostIdRequest,
  fetchPostByPostIdSuccess,
  fetchPostByPostIdFail,
} = createActions({
  FETCH_POST_BY_POST_ID_REQUEST: () => {},
  FETCH_POST_BY_POST_ID_SUCCESS: (data) => ({ data }),
  FETCH_POST_BY_POST_ID_FAIL: (error) => ({ error }),
});

export const fetchPostByPostId = (id) => (dispatch) => {
  dispatch(fetchPostByPostIdRequest());
  return Api.Post.fetchPostByPostId(id)
    .then(({ data }) => {
      dispatch(fetchPostByPostIdSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchPostByPostIdFail(error));
      return Promise.reject(error);
    });
};

// REMOVE POST

const { removePostRequest, removePostSuccess, removePostFail } = createActions({
  REMOVE_POST_REQUEST: () => {},
  REMOVE_POST_SUCCESS: (data) => ({ data }),
  REMOVE_POST_FAIL: (error) => ({ error }),
});

export const removePost = (id) => (dispatch) => {
  dispatch(removePostRequest());
  return Api.Post.removePost(id)
    .then(({ data }) => {
      dispatch(removePostSuccess(data));
      dispatch(fetchAllPosts(20, 1));

      return data;
    })
    .catch((error) => {
      dispatch(removePostFail(error));
      return Promise.reject(error);
    });
};

// FETCH_ALL_POST_BY_GROUP_ID

const {
  fetchAllPostByGroupIdRequest,
  fetchAllPostByGroupIdSuccess,
  fetchAllPostByGroupIdFail,
} = createActions({
  FETCH_ALL_POST_BY_GROUP_ID_REQUEST: () => {},
  FETCH_ALL_POST_BY_GROUP_ID_SUCCESS: (data) => ({ data }),
  FETCH_ALL_POST_BY_GROUP_ID_FAIL: (error) => ({ error }),
});

export const fetchAllPostByGroupId =
  ({ groupID, size, page }) =>
  (dispatch) => {
    dispatch(fetchAllPostByGroupIdRequest());
    return Api.Post.fetchAllPostByGroupId({ groupID, size, page })
      .then(({ data }) => {
        dispatch(fetchAllPostByGroupIdSuccess(data));
        return data;
      })
      .catch((error) => {
        dispatch(fetchAllPostByGroupIdFail(error));
        return Promise.reject(error);
      });
  };

// FETCH ALL POST ADMIN ROLE

const {
  fetchAllPostsRoleAdminRequest,
  fetchAllPostsRoleAdminSuccess,
  fetchAllPostsRoleAdminFail,
} = createActions({
  FETCH_ALL_POSTS_ROLE_ADMIN_REQUEST: () => {},
  FETCH_ALL_POSTS_ROLE_ADMIN_SUCCESS: (data) => ({ data }),
  FETCH_ALL_POSTS_ROLE_ADMIN_FAIL: (error) => ({ error }),
});

export const fetchAllPostsRoleAdmin = () => (dispatch) => {
  dispatch(fetchAllPostsRoleAdminRequest());
  return Api.Post.fetchAllPostsRoleAdmin()
    .then(({ data }) => {
      dispatch(fetchAllPostsRoleAdminSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchAllPostsRoleAdminFail(error));
      return Promise.reject(error);
    });
};
