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

  async updateJenis(payload) {
    const { id, name, price, description, access_online_class, access_offline_class, access_trainer, access_gym, picture } = payload;
    console.log(payload);
    try {
      const response = await axiosInstance.put(`/members/types/details/${id}`, {
        name,
        price,
        description,
        access_online_class,
        access_offline_class,
        access_trainer,
        access_gym,
        picture,
      });
      return response;
    } catch (error) {
      console.log(error);
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

  async tambahKelasOnline(payload) {
    try {
      const { title, link, price, description, online_class_category_id, tools, target_area, duration, level, picture } = payload;

      const response = await axiosInstance.post(`/online-classes`, {
        title,
        link,
        price,
        description,
        online_class_category_id,
        tools,
        target_area,
        duration,
        level,
        picture,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async tambahkelasOffline(payload) {
    try {
      const { title, time, duration, slot, price, picture, description, location, offline_class_category_id } = payload;

      const response = await axiosInstance.post(`/offline-classes`, {
        title,
        time,
        duration,
        slot,
        price,
        picture,
        description,
        location,
        offline_class_category_id,
      });
      return response;
    } catch (err) {
      console.log(err.response.data.message);
    }
  },

  async deleteKelasOffline(id) {
    try {
      const response = await axiosInstance.delete(`/offline-classes/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async updateKelasOffline(payload) {
    const { id, title, time, duration, slot, price, picture, description, location, offline_class_category_id } = payload;
    console.log(payload);
    try {
      const response = await axiosInstance.put(`/offline-classes/details/${id}`, {
        title,
        time,
        duration,
        slot,
        price,
        picture,
        description,
        location,
        offline_class_category_id,
      });
      return response;
    } catch (error) {
      console.log(error.response.data.message);
    }
  },
  async updateKelasOnline(payload) {
    const { id, title, link, price, description, online_class_category_id, tools, target_area, duration, level, picture } = payload;
    console.log(payload);
    try {
      const response = await axiosInstance.put(`/online-classes/details/${id}`, {
        title,
        link,
        price,
        description,
        online_class_category_id,
        tools,
        target_area,
        duration,
        level,
        picture,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteKelasOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
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

  async updateKategoriOnline(payload) {
    try {
      const { name, description, picture, id } = payload;
      const response = await axiosInstance.put(`/online-classes/categories/details/${id}`, {
        name,
        description,
        picture,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteKategoriOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/categories/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteKategoriOffline(id) {
    try {
      const response = await axiosInstance.delete(`/offline-classes/categories/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async tambahOfflineKategori(payload) {
    try {
      const { name, description, picture } = payload;
      const response = await axiosInstance.post(`/offline-classes/categories`, {
        name,
        description,
        picture,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  async updateKategoriOffline(payload) {
    try {
      const { name, description, picture, id } = payload;
      const response = await axiosInstance.put(`/offline-classes/categories/details/${id}`, {
        name,
        description,
        picture,
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteBookingOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/bookings/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default PostApi;
