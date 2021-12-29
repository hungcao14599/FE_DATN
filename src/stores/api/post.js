import http from "../../services/http";
import authHeader from "../../services/authHeader";
const PREFIX = "/posts";

export default class Post {
  static fetchAllPosts(size, page) {
    return http.get(`${PREFIX}?size=${size}&page=${page}`, {
      headers: authHeader(),
    });
  }

  static fetchAllPostsRoleAdmin() {
    return http.get(`${PREFIX}/admin-role`, {
      headers: authHeader(),
    });
  }

  static fetchAllPostsInGroup(size, page) {
    return http.get(`${PREFIX}/group-post?size=${size}&page=${page}`, {
      headers: authHeader(),
    });
  }

  static fetchAllPostsByUserName(username, size, page) {
    return http.get(`${PREFIX}/user/${username}?size=${size}&page=${page}`, {
      headers: authHeader(),
    });
  }

  static addPost(content, type, groupID) {
    return http.post(
      PREFIX,
      { content, type, groupID },
      { headers: authHeader() }
    );
  }
  static uploadImage(id, formData) {
    return http.post(`${PREFIX}/upload/${id}`, formData, {
      headers: authHeader(),
    });
  }
  static fetchPostByPostId(id) {
    return http.get(`${PREFIX}/post-item/${id}`, {
      headers: authHeader(),
    });
  }
  static removePost(id) {
    return http.put(`${PREFIX}/delete/${id}`, {}, { headers: authHeader() });
  }
  static fetchAllPostByGroupId({ groupID, size, page }) {
    return http.get(
      `${PREFIX}/group-post/${groupID}?size=${size}&page=${page}`,
      { headers: authHeader() }
    );
  }

  static updatePost(id, content, images) {
    return http.put(PREFIX, { id, content, images }, { headers: authHeader() });
  }
}
