import { createActions } from "redux-actions";
import Api from "../stores/api";

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
                if (isFile) {
                    dispatch(uploadImageRequest());
                    return Api.Post.uploadImage(data.data.id, formData)
                        .then((res) => {
                            dispatch(uploadImageSuccess(res));
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