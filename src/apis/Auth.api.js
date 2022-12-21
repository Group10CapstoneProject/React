import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";
const APIAuth = {
  async loginUser(payload) {
    try {
      const { email, password } = payload;
      // const response = await axios.post(`${CONST.BASE_URL}/auth/admin/login`, {
      //   email,
      //   password,
      // });
      const response = await axiosInstance.post(`/auth/admin/login`, {
        email,
        password,
      });
      // const token = response.data.data.access_token;
      // localStorage.setItem("token", token);
      // ("Authorization", "Bearer " + response.data.data.acces_token);

      Auth.storeUserInfoToCookie(response.data.data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIAuth;