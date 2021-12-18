import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/friend";

export default class Friend {
  static fetchAllFriendOfUserById(size, page, keyword) {
    return http.get(
      `${PREFIX}/user-friend?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }
  static fetchAllUserApprovalById(size, page, keyword) {
    return http.get(
      `${PREFIX}/approval?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }

  static fetchAllNotFriendOfUserById(size, page, keyword) {
    return http.get(
      `${PREFIX}/not-friend?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }

  static approvalFriend(friend, isApproval) {
    return http.post(
      `${PREFIX}/approval/`,
      { friend, isApproval },
      {
        headers: authHeader(),
      }
    );
  }
  static addFriend(userID) {
    return http.post(
      `${PREFIX}/add/${userID}`,
      {},
      {
        headers: authHeader(),
      }
    );
  }
}
