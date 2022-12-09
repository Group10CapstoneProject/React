import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";

const Gym = {
  async pembayaran() {
    try {
      // const response = await axios.get(`${CONST.BASE_URL}//paymentMethods`);
      const response = await axiosInstance.get("/payment-methods");
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async members() {
    try {
      const response = await axiosInstance.get(`/members`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async onlineKategori() {
    try {
      const response = await axiosInstance.get(`/online-classes/categories`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async onlinekelas() {
    try {
      const response = await axiosInstance.get("/online-classes");
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async memberType() {
    try {
      const response = await axiosInstance.get(`/members/types`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default Gym;
