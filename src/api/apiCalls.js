import axios from "axios";

export const signup = (customer) => {
  return axios.post("/customers", customer);
};
