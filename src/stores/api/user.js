import http from "../../services/http";

const PREFIX = "/users";

export default class User {
    static verifyAccount(verifyCode, email) {
        return http.post(`${PREFIX}/verify`, { verifyCode, email });
    }
}