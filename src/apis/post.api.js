import axios from "axios";
import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";

const PostApi = {
  async metode(payload) {
    try {
      const { name, payment_number, description } = payload;
      const response = await axiosInstance.post("/payment-methods", {
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
    console.log("ye");
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
      const { name, price, description, access_offline_class, access_online_class, access_trainer, access_gym, picture } = payload;
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
      console.log(err);
    }
  },

  async tambahAnggota(payload) {
    try {
      const { member_type_id, duration, payment_method_id, total } = payload;
      console.log(payload);

      const response = await axiosInstance.post(`/members`, {
        member_type_id,
        duration,
        payment_method_id,
        total,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async deleteMethod(id) {
    try {
      const response = axiosInstance.delete(`/payment-methods/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async hapusJenisMember(id) {
    try {
      const response = await axiosInstance.delete(`/members/types/details/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async hapusAnggota(id) {
    try {
      const response = await axiosInstance.delete(`/members/details/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  // online kategori
  async tambahOnlineKategori(payload) {
    try {
      const { name, description, picture } = payload;
      const response = await axiosInstance.post(`/online-classes/categories`, {
        name,
        description,
        picture,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async updateKategoriOnline(payload, id) {
    try {
      const { name, description, picture } = payload;
      const response = await axiosInstance.put(`/online-classes/categories/details/${id}`);

      return response;
    } catch (error) {}
  },

  async deleteKategoriOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/categories/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default PostApi;
