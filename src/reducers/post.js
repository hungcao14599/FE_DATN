import { handleActions } from "redux-actions";

const initialState = {
  addPost: {
    result: [],
    error: null,
    requesting: false,
  },
  updatePost: {
    result: [],
    error: null,
    requesting: false,
  },
  removePost: {
    result: [],
    error: null,
    requesting: false,
  },
  uploadImage: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllPosts: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchPostByPostId: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllPostsByUserName: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllPostByGroupId: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllPostsInGroup: {
    result: [],
    error: null,
    requesting: false,
  },
  fetchAllPostsRoleAdmin: {
    result: [],
    error: null,
  },
};

export const postReducer = handleActions(
  {
    //ADD POST
    ADD_POST_REQUEST: (state) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: true,
        error: null,
      },
    }),
    ADD_POST_SUCCESS: (state, { payload }) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    ADD_POST_FAIL: (state, { payload }) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //UPDATE_POST
    UPDATE_POST_REQUEST: (state) => ({
      ...state,
      updatePost: {
        ...state.updatePost,
        requesting: true,
        error: null,
      },
    }),
    UPDATE_POST_SUCCESS: (state, { payload }) => ({
      ...state,
      updatePost: {
        ...state.updatePost,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPDATE_POST_FAIL: (state, { payload }) => ({
      ...state,
      updatePost: {
        ...state.updatePost,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //UPLOAD IMAGE
    UPLOAD_IMAGE_REQUEST: (state) => ({
      ...state,
      uploadImage: {
        ...state.uploadImage,
        requesting: true,
        error: null,
      },
    }),
    UPLOAD_IMAGE_SUCCESS: (state, { payload }) => ({
      ...state,
      uploadImage: {
        ...state.uploadImage,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    UPLOAD_IMAGE_FAIL: (state, { payload }) => ({
      ...state,
      uploadImage: {
        ...state.uploadImage,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL POST REQUEST
    FETCH_ALL_POSTS_REQUEST: (state) => ({
      ...state,
      fetchAllPosts: {
        ...state.fetchAllPosts,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_POSTS_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllPosts: {
        ...state.fetchAllPosts,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_POSTS_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllPosts: {
        ...state.fetchAllPosts,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL POST IN GROUP
    FETCH_ALL_POSTS_IN_GROUP_REQUEST: (state) => ({
      ...state,
      fetchAllPostsInGroup: {
        ...state.fetchAllPostsInGroup,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_POSTS_IN_GROUP_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllPostsInGroup: {
        ...state.fetchAllPostsInGroup,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_POSTS_IN_GROUP_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllPostsInGroup: {
        ...state.fetchAllPostsInGroup,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //FETCH POST BY POST ID
    FETCH_POST_BY_POST_ID_REQUEST: (state) => ({
      ...state,
      fetchPostByPostId: {
        ...state.fetchPostByPostId,
        requesting: true,
        error: null,
      },
    }),
    FETCH_POST_BY_POST_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchPostByPostId: {
        ...state.fetchPostByPostId,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_POST_BY_POST_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchPostByPostId: {
        ...state.fetchPostByPostId,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    //REMOVE POST
    REMOVE_POST_REQUEST: (state) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: true,
        error: null,
      },
    }),
    REMOVE_POST_SUCCESS: (state, { payload }) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    REMOVE_POST_FAIL: (state, { payload }) => ({
      ...state,
      addPost: {
        ...state.addPost,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL POST BY USERNAME
    FETCH_ALL_POSTS_BY_USER_NAME_REQUEST: (state) => ({
      ...state,
      fetchAllPostsByUserName: {
        ...state.fetchAllPostsByUserName,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_POSTS_BY_USER_NAME_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllPostsByUserName: {
        ...state.fetchAllPostsByUserName,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_POSTS_BY_USER_NAME_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllPostsByUserName: {
        ...state.fetchAllPostsByUserName,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL POST REQUEST
    FETCH_ALL_POST_BY_GROUP_ID_REQUEST: (state) => ({
      ...state,
      fetchAllPostByGroupId: {
        ...state.fetchAllPostByGroupId,
        requesting: true,
        error: null,
      },
    }),
    FETCH_ALL_POST_BY_GROUP_ID_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllPostByGroupId: {
        ...state.fetchAllPostByGroupId,
        requesting: false,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_POST_BY_GROUP_ID_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllPostByGroupId: {
        ...state.fetchAllPostByGroupId,
        requesting: false,
        result: null,
        error: payload.error,
      },
    }),

    // FETCH ALL POST ADMIN ROLE
    FETCH_ALL_POSTS_ROLE_ADMIN_REQUEST: (state) => ({
      ...state,
      fetchAllPostsRoleAdmin: {
        ...state.fetchAllPostsRoleAdmin,
        error: null,
      },
    }),
    FETCH_ALL_POSTS_ROLE_ADMIN_SUCCESS: (state, { payload }) => ({
      ...state,
      fetchAllPostsRoleAdmin: {
        ...state.fetchAllPostsRoleAdmin,
        error: null,
        result: payload.data,
      },
    }),
    FETCH_ALL_POSTS_ROLE_ADMIN_FAIL: (state, { payload }) => ({
      ...state,
      fetchAllPostsRoleAdmin: {
        ...state.fetchAllPostsRoleAdmin,
        result: null,
        error: payload.error,
      },
    }),
  },
  initialState
);

export default postReducer;
