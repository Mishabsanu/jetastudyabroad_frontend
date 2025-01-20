import env from "@/lib/env.config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
});

export default axiosInstance;
