import _axios from "axios";

const axios = _axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axios;
