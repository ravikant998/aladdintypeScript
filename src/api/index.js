import axios from "axios";
import { BASE_URL } from "../config";

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("loginData"),
    country: JSON.parse(localStorage.getItem("country_name"))?.name,
  },
});

