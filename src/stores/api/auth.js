import http from "../../services/http";

const PREFIX = "/auth";

export default class Auth {
    static loginUser(username, password) {
        return http.post(`${PREFIX}/login/`, { username, password });
    }
    static registerUser(username, password, email) {
        return http.post(`${PREFIX}/register/`, { username, password, email });
    }
    static verifyAccount(verifyCode, email) {
        return http.post(`${PREFIX}/verify`, { verifyCode, email });
    }
}