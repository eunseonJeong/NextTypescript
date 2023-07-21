import { errorHandler } from "@/app/utils/error";
import axios from "axios";

export const user = axios.create({
  baseURL: process.env.MONGODB_URI,
  withCredentials: true,
});

user.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    errorHandler(error);
    return Promise.reject(error);
  }
);
