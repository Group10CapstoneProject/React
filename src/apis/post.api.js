import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import CONST from "../utils/Constants";

const PostApi = {
  async metode(payload) {
    try {
      const { name, payment_number, description } = payload;

      // const response = await axiosInstance.post("/paymentMethods", {
      //   name,
      //   payment_number,
      //   description,
      // });
      // const response = await axiosInstance.post("/paymentMethods", {
      //   name,
      //   payment_number,
      //   description,
      // });

      const response = await axios.post(`${CONST.BASE_URL}/paymentMethods`, {
        name,
        payment_number,
        description,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async tambahJenisMember(payload) {
    try {
      const {
        name,
        price,
        description,
        access_offline_class,
        access_online_class,
        access_trainer,
        access_gym,
      } = payload;
    } catch (err) {
      console.log(err);
    }
  },
};

export default PostApi;
