import axios from "axios";

const baseService = axios.create({
  baseURL: "https://search.imdbot.workers.dev/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000,
});

export default baseService;
