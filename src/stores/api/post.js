import http from "../../services/http";
import authHeader from "../../services/authHeader";
const PREFIX = "/posts";

export default class Post {
    static fetchAllPosts(size, page) {
        return http.get(`${PREFIX}?size=${size}&page=${page}`, {
            headers: authHeader(),
        });
    }
    static addPost(content, type, groupID) {
        return http.post(
            PREFIX, { content, type, groupID }, { headers: authHeader() }
        );
    }
    static uploadImage(id, formData) {
        return http.post(`${PREFIX}/upload/${id}`, formData, {
            headers: authHeader(),
        });
    }
    static fetchPostByPostID(id) {
        return http.get(`${PREFIX}/post-item/${id}`, {
            headers: authHeader(),
        });
    }
}