import axios from "axios";
import CONST from "../utils/Constants";

const ListUsers = {
  async users() {
    try {
      const response = await axios.get(`${CONST.BASE_URL}users?page=2`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default ListUsers;
