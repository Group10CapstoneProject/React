import { axiosInstance } from "../configs/axiosInstance";
import Auth from "../utils/Auth";
const APIAuth = {
  async loginUser(payload) {
    try {
      const { email, password } = payload;
      const response = await axiosInstance.post("/auth/admin/login", {
        email,
        password,
      });
      // const token = response.data.data.access_token;
      // localStorage.setItem("token", token);
      Auth.storeUserInfoToCookie(response.data.data);
      // console.log(response.data);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default APIAuth;
