import axios from "axios";

export const signup = (customer) => {
  return axios.post("/customers", customer);
};

export const login = (customer) => {
  return axios.post("/login", {}, { auth: customer });
};
