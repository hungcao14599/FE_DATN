import http from "../../services/http";
import authHeader from "../../services/authHeader";
const PREFIX = "/posts";

export default class Post {
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
}