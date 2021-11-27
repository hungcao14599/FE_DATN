import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { userReducer } from "./user";
const reducer = () =>
    combineReducers({
        auth: authReducer,
        user: userReducer,
    });

export default reducer;