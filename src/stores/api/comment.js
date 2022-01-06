import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/post-comment";

export default class Comment {
  static addCommentToPost(content, postID) {
    return http.post(
      `${PREFIX}/`,
      { content, postID },
      {
        headers: authHeader(),
      }
    );
  }
  static fetchCommentByPost(postID, size = 10, page = 1) {
    return http.get(`${PREFIX}/${postID}?size=${size}&page=${page}`, {
      headers: authHeader(),
    });
  }
  static removeCommentOfPost(id) {
    return http.put(`${PREFIX}/delete/${id}`, {}, { headers: authHeader() });
  }
  static updateCommentOfPost(id, content) {
    return http.put(`${PREFIX}/`, { id, content }, { headers: authHeader() });
  }
}
