import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { userReducer } from "./user";
import { postReducer } from "./post";
import { likeReducer } from "./like";
import { commentReducer } from "./comment";
import { friendReducer } from "./friend";
import { groupReducer } from "./group";
import { messageReducer } from "./message";
import { chatReducer } from "./chat";
const reducer = () =>
  combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    like: likeReducer,
    comment: commentReducer,
    friend: friendReducer,
    group: groupReducer,
    message: messageReducer,
    chat: chatReducer,
  });

export default reducer;
