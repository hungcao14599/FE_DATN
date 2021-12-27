import Search from "antd/lib/transfer/search";
import authHeader from "../../services/authHeader";
import http from "../../services/http";

const PREFIX = "/groups";

export default class Group {
  static addGroup(name, description, caption) {
    return http.post(
      `${PREFIX}/`,
      { name, description, caption },
      {
        headers: authHeader(),
      }
    );
  }
  static fetchGroupsOfUser({ size, page, keyword }) {
    return http.get(
      `${PREFIX}/groups-info?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }

  static fetchOtherGroupsOfUser({ size, page, keyword }) {
    return http.get(
      `${PREFIX}/other-groups?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }
  static fetchGroupById(id) {
    return http.get(`${PREFIX}/group-item/${id}`);
  }
  static fetchUserJoinGroup({ id, page, size, keyword }) {
    return http.get(
      `${PREFIX}/users-join/${id}?size=${size}&page=${page}&keyword=${keyword}`,
      {
        headers: authHeader(),
      }
    );
  }
  static userJoinGroup(id) {
    return http.post(
      `${PREFIX}/join-group/${id}`,
      {},
      {
        headers: authHeader(),
      }
    );
  }

  static fetchMemberJoinGroup({ id, page, size, keyword }) {
    return http.get(
      `${PREFIX}/member-join/${id}?size=${size}&page=${page}&keyword=${keyword}`
    );
  }

  static groupAdminApprovalUserJoinGroup(userID, groupID, isApproval) {
    return http.post(
      `${PREFIX}/approval`,
      { userID, groupID, isApproval },
      {
        headers: authHeader(),
      }
    );
  }

  static fetchMemberInGroup({ groupID, page, size, keyword }) {
    return http.get(
      `${PREFIX}/members/${groupID}?size=${size}&page=${page}&keyword=${keyword}`
    );
  }

  static fetchAllGroups() {
    return http.get(`${PREFIX}`, {
      headers: authHeader(),
    });
  }
}
