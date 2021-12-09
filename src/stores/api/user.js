import http from "../../services/http";
import authHeader from "../../services/authHeader";
import userIDHeader from "../../services/userIDHeader";

const PREFIX = "/users";
export default class User {
  static verifyAccount(verifyCode, email) {
    return http.post(`${PREFIX}/verify`, { verifyCode, email });
  }
  static fetchUserByID() {
    return http.get(`${PREFIX}/info`, {
      headers: authHeader(),
    });
  }
  static updateUserInfo(
    firstname,
    lastname,
    phone,
    birthday,
    gender,
    description,
    address
  ) {
    return http.put(
      `${PREFIX}/update`,
      { firstname, lastname, phone, birthday, gender, description, address },
      {
        headers: authHeader(),
      }
    );
  }
}
