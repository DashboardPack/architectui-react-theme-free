import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullname, username, email, password, nim, whatsapp, ktmURL, selfieURL) {
    console.log("masuk register auth.service")
    return axios.post(API_URL + "signup", {
      fullname,
      username,
      email,
      password,
      nim,
      whatsapp,
      ktmURL,
      selfieURL
    });
  }
}

export default new AuthService();
