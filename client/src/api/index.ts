import axios from "axios";

let baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

export default axios.create({ baseURL: baseUrl });
