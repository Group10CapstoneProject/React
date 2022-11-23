import { axiosInstance } from "../configs/axiosInstance";

const Auth = {
  async loginUser(payload) {
    try {
      const { email, password } = payload;
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      return response;
    } catch (error) {
      console.log(error.response);
    }
  },
};

export default Auth;
