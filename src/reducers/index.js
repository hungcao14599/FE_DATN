import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { userReducer } from "./user";
import { postReducer } from "./post";
import { likeReducer } from "./like";
import { commentReducer } from "./comment";
const reducer = () =>
    combineReducers({
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        like: likeReducer,
        comment: commentReducer,
    });

export default reducer;