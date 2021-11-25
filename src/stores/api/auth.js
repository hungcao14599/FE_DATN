import http from "../../services/http";

const PREFIX = "/auth";

export default class Auth {
  static loginUser({ username, password }) {
    return http.post(PREFIX + "/login", { username, password });
  }
}
