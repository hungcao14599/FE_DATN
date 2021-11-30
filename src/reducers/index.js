import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { userReducer } from "./user";
import { postReducer } from "./post";
const reducer = () =>
    combineReducers({
        auth: authReducer,
        user: userReducer,
        post: postReducer,
    });

export default reducer;