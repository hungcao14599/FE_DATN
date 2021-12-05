import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/post-mood";

export default class Like {
    static handlePostLike(postID) {
        return http.post(
            `${PREFIX}/${postID}`, {}, {
                headers: authHeader(),
            }
        );
    }
}