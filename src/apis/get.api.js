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

  async members(payload) {
    const { currentPage, postPerPage, search } = payload;
    try {
      const response = await axiosInstance.get(`/members?page=${currentPage}&limit=${postPerPage}&q=${search}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async membersDetail(id) {
    try {
      const response = await axiosInstance.get(`/members/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
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

  async offline() {
    try {
      const response = await axiosInstance.get(`/offline-classes/categories`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async offlineKategori() {
    try {
      const response = await axiosInstance.get(`/offline-classes/categories`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  async offlineKelas() {
    try {
      const response = await axiosInstance.get("/offline-classes");
      return response;
    } catch (error) {
      console.log(error);
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

  async detailOnlineKelas(id) {
    try {
      const response = await axiosInstance.get(`online-classes/details/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async detailOfflineKelas(id) {
    try {
      const response = await axiosInstance.get(`offline-classes/details/${id}`);
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

  async bookingOnline(payload) {
    const { currentPage, postPerPage, search } = payload;
    try {
      const response = await axiosInstance.get(`/online-classes/bookings?page=${currentPage}&limit=${postPerPage}&q=${search}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async bookingOffline(payload) {
    const { currentPage, postPerPage, search } = payload;
    try {
      const response = await axiosInstance.get(`/offline-classes/bookings?page=${currentPage}&limit=${postPerPage}&q=${search}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async detailBookingOffline(id) {
    try {
      const response = await axiosInstance.get(`/offline-classes/bookings/details/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },
  async detailBookingOnline(id) {
    try {
      const response = await axiosInstance.get(`/online-classes/bookings/details/${id}`);
      return response;
    } catch (error) {
      console.log("error");
    }
  },

  // async detailBookingOnline(id) {
  //   try {
  //     const response = await axiosInstance.get(
  //       `/online-classes/bookings/details/${id}`
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log("error");
  //   }
  // },
};

export default Gym;