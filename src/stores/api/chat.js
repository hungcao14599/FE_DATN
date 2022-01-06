import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/chat";

export default class Chat {
  static fetchChatsByUserId(size, page, keyword) {
    return http.get(
      `${PREFIX}/chat-user?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }
  static fetchMembersInChat(postID) {
    return http.get(`${PREFIX}/member/${postID}`, {
      headers: authHeader(),
    });
  }
}
