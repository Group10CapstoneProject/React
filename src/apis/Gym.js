import axios from "axios";
import { axiosInstance } from "../configs/axiosInstance";
import CONST from "../utils/Constants";

const Gym = {
  async members() {
    try {
      const response = await axios.get(`${CONST.BASE_URL}/members`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default Gym;
