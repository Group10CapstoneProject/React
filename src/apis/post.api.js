import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";

const PostApi = {
  async metode(payload) {
    try {
      const { name, payment_number, description } = payload;

      const response = await axiosInstance.post("/paymentMethods", {
        name,
        payment_number,
        description,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async uploadFile(payload) {
    const data = new FormData();
    data.append("title", payload.title);
    data.append("file", payload.files[0]);
    try {
      const response = await axiosInstance.post("/files/upload", data, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
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
        picture,
      } = payload;
      console.log(payload);

      const response = await axiosInstance.post(`/members/types`, {
        name,
        price,
        description,
        access_offline_class,
        access_online_class,
        access_trainer,
        access_gym,
        picture,
      });
      return response;
    } catch (err) {
      console.log("woi");
    }
  },

  async deleteMethod(id) {
    try {
      const response = axiosInstance.delete(`/paymentMethods/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async hapusJenisMember(id) {
    try {
      const response = axiosInstance.delete(`/members/types/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteMember(id) {
    try {
      const response = await axiosInstance.delete(`/members/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
};

export default PostApi;