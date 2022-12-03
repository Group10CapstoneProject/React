import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import CONST from "../utils/Constants";

const Get = {
  async pembayaran() {
    try {
      const response = await axios.get(`${CONST.BASE_URL}//paymentMethods`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default Get;
