import http from "../../services/http";
import authHeader from "../../services/authHeader";
import userIDHeader from "../../services/userIDHeader";

const PREFIX = "/users";
export default class User {
    static verifyAccount(verifyCode, email) {
        return http.post(`${PREFIX}/verify`, { verifyCode, email });
    }
    static fetchUserByID() {
        return http.get(`${PREFIX}/info`, {
            headers: authHeader(),
        });
    }
}