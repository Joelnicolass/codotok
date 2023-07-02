import axios from "axios";

export const RANDOM_USER_API = axios.create({
  baseURL: "https://randomuser.me/api/",
  timeout: 3000,
});
