import http from "../../services/http";

const PREFIX = "/auth";

export default class Auth {
    static loginUser(email, password) {
        return http.post(`${PREFIX}/login/`, { email, password });
    }
    static registerUser(username, password, email) {
        return http.post(`${PREFIX}/register/`, { username, password, email });
    }
}