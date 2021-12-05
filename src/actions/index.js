import * as auth from "./auth";
import * as user from "./user";
import * as post from "./post";
import * as like from "./like";
import * as comment from "./comment";
import * as friend from "./friend";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...auth,
    ...user,
    ...post,
    ...like,
    ...comment,
    ...friend,
};