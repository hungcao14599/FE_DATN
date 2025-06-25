import http from "../../services/http";
import authHeader from "../../services/authHeader";

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

  static fetchAllUsers() {
    return http.get(`${PREFIX}/`, {
      headers: authHeader(),
    });
  }

  static uploadAvatar(image) {
    return http.put(`${PREFIX}/avatar`, image, {
      headers: authHeader(),
    });
  }
  static uploadCoverImage(image) {
    return http.put(`${PREFIX}/cover-image`, image, {
      headers: authHeader(),
    });
  }
  static fetchImgByUserName(username) {
    return http.get(`${PREFIX}/images/${username}`);
  }

  static fetchImage(image) {
    return http.get(`${PREFIX}/image/${image}`);
  }

  static fetchUserByName(username) {
    return http.get(`${PREFIX}/name/${username}`);
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

  static setBlockUser(id) {
    return http.post(
      `${PREFIX}/block/${id}`,
      {},
      {
        headers: authHeader(),
      }
    );
  }

  static setUnBlockUser(id) {
    return http.post(
      `${PREFIX}/unblock/${id}`,
      {},
      {
        headers: authHeader(),
      }
    );
  }

  static fetchNumOfUserByMonth() {
    return http.get(`${PREFIX}/num-of-users`);
  }
}
