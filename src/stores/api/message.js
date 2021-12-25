import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/message";

export default class Message {
  static createMessage(username, message, chatID) {
    return http.post(
      `${PREFIX}/`,
      { username, message, chatID },
      {
        headers: authHeader(),
      }
    );
  }
  static fetchMessageByChatId(id, size, page) {
    return http.get(`${PREFIX}/content/${id}?size=${size}&page=${page}`, {
      headers: authHeader(),
    });
  }
}
