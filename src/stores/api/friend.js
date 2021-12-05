import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/friend";

export default class Friend {
    static fetchAllFriendOfUserById(size, page) {
        return http.get(`${PREFIX}/user-friend?size=${size}&page=${page}`, {
            headers: authHeader(),
        });
    }
    static fetchAllUserApprovalById(size, page) {
        return http.get(`${PREFIX}/approval?size=${size}&page=${page}`, {
            headers: authHeader(),
        });
    }
}