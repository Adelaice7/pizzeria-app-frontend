import axios from "axios";

export const signup = (customer) => {
  return axios.post("/api/auth/register", customer);
};

export const login = (customer) => {
  return axios.post("/api/auth/login", {
    username: customer.username,
    password: customer.password,
  });
};
