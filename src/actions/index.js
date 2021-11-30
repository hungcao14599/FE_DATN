import * as auth from "./auth";
import * as user from "./user";
import * as post from "./post";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...auth,
    ...user,
    ...post,
};