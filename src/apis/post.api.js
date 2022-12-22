import axiosInstance from "../configs/axiosInstance";

const PostApi = {
  async metode(payload) {
    try {
      const { name, payment_number, description, picture } = payload;
      const response = await axiosInstance.post("/payment-methods", {
        name,
        payment_number,
        description,
        picture,
      });

      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async editPembayaran(payload) {
    try {
      const { id, name, payment_number, description, picture } = payload;
      const response = await axiosInstance.put(
        `/payment-methods/details/${id}`,
        {
          id,
          name,
          payment_number,
          description,
          picture,
        }
      );

      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
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
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
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
      const { message } = err.response.data;
      throw new Error(message);
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
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
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
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async tambahKelasOnline(payload) {
    try {
      const {
        title,
        link,
        price,
        description,
        online_class_category_id,
        tools,
        target_area,
        duration,
        trainer_id,
        level,
        picture,
      } = payload;

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
        trainer_id,
        picture,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async tambahkelasOffline(payload) {
    try {
      const {
        title,
        time,
        duration,
        slot,
        price,
        picture,
        description,
        trainer_id,
        location,
        offline_class_category_id,
      } = payload;

      const response = await axiosInstance.post(`/offline-classes`, {
        title,
        time,
        duration,
        slot,
        price,
        picture,
        description,
        trainer_id,
        location,
        offline_class_category_id,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteKelasOffline(id) {
    try {
      const response = await axiosInstance.delete(`/offline-classes/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async updateKelasOffline(payload) {
    const {
      id,
      title,
      time,
      duration,
      slot,
      price,
      trainer_id,
      picture,
      description,
      location,
      offline_class_category_id,
    } = payload;
    try {
      const response = await axiosInstance.put(
        `/offline-classes/details/${id}`,
        {
          title,
          time,
          duration,
          trainer_id,
          slot,
          price,
          picture,
          description,
          location,
          offline_class_category_id,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async updateKelasOnline(payload) {
    const {
      id,
      title,
      link,
      price,
      description,
      online_class_category_id,
      tools,
      trainer_id,
      target_area,
      duration,
      level,
      picture,
    } = payload;
    console.log(payload);
    try {
      const response = await axiosInstance.put(
        `/online-classes/details/${id}`,
        {
          title,
          link,
          price,
          description,
          online_class_category_id,
          tools,
          target_area,
          trainer_id,
          duration,
          level,
          picture,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteKelasOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteTrainer(id) {
    try {
      const response = await axiosInstance.delete(`/trainers/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteMethod(id) {
    try {
      const response = axiosInstance.delete(`/payment-methods/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async hapusJenisMember(id) {
    try {
      const response = await axiosInstance.delete(`/members/types/details/${id}`);
      console.log(response);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async hapusAnggota(id) {
    try {
      const response = await axiosInstance.delete(`/members/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
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
      const { message } = err.response.data;
      throw new Error(message);
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
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteKategoriOnline(id) {
    try {
      const response = await axiosInstance.delete(`/online-classes/categories/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteKategoriOffline(id) {
    try {
      const response = await axiosInstance.delete(`/offline-classes/categories/details/${id}`);
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
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
      const { message } = err.response.data;
      throw new Error(message);
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
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async konfirmasiMembers(payload) {
    const { id, status } = payload;
    try {
      const response = await axiosInstance.post(`/members/set-status/${id}`, {
        status: status,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async updateBookingOffline(payload) {
    const { id, offline_class_id, payment_method_id, total } = payload;
    try {
      const response = await axiosInstance.put(
        `/offline-classes/bookings/details/${id}`,
        {
          offline_class_id,
          payment_method_id,
          total,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async setStatusBookingOffline(payload) {
    const { status, id } = payload;
    try {
      const response = await axiosInstance.post(
        `/offline-classes/bookings/set-status/${id}`,
        {
          status,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async setStatusBookingOnline(payload) {
    const { status, id } = payload;
    try {
      const response = await axiosInstance.post(
        `/online-classes/bookings/set-status/${id}`,
        {
          status,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteBookingOffline(id) {
    try {
      const response = await axiosInstance.delete(
        `/offline-classes/bookings/details/${id}`
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
  async deleteBookingOnline(id) {
    try {
      const response = await axiosInstance.delete(
        `/online-classes/bookings/details/${id}`
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async tambahSkill(payload) {
    const { description, name } = payload;
    try {
      const response = await axiosInstance.post(`/trainers/skills`, {
        name,
        description,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async editSkill(payload) {
    const { id, description, name } = payload;
    try {
      const response = await axiosInstance.put(
        `/trainers/skills/details/${id}`,
        {
          name,
          description,
        }
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async deleteSkill(id) {
    try {
      const response = await axiosInstance.delete(
        `/trainers/skills/details/${id}`
      );
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async tambahTrainer(payload) {
    const {
      name,
      email,
      phone,
      dob,
      gender,
      price,
      daily_slot,
      skills,
      description,
      picture,
    } = payload;
    try {
      const response = await axiosInstance.post(`trainers`, {
        name,
        email,
        phone,
        dob,
        gender,
        price,
        daily_slot,
        skills,
        description,
        picture,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },

  async updateTrainer(payload) {
    const {
      id,
      name,
      email,
      phone,
      dob,
      gender,
      price,
      daily_slot,
      skills,
      description,
      picture,
    } = payload;
    try {
      const response = await axiosInstance.put(`trainers/details/${id}`, {
        name,
        email,
        phone,
        dob,
        gender,
        price,
        daily_slot,
        skills,
        description,
        picture,
      });
      return response;
    } catch (err) {
      const { message } = err.response.data;
      throw new Error(message);
    }
  },
};

export default PostApi;
