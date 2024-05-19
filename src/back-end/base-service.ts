import axios from "axios";
import { REMOTE_URL } from "../helpers/constants";

const baseService = axios.create({
  baseURL: `${REMOTE_URL}`,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000,
});

export default baseService;
