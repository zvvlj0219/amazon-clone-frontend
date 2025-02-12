import { API_DOMAIN } from "@/config/app";
import axios from "axios";

const axiosWithCredentials = axios.create({
  baseURL: `${API_DOMAIN}`,
  headers: {
    accept: 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default axiosWithCredentials;
