// api.js
import axios from "axios";

// Use the API URL from the environment variable
const API_URL = process.env.REACT_APP_API_URL;

const API_GMAIL = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    data: payload,
  });
};

export default API_GMAIL;
