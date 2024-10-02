// api.js
import axios from "axios";

// Use the Render deployment link
const API_URL = "https://gmail-clone-back-end-hdsg.onrender.com";

const API_GMAIL = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    data: payload,
  });
};

export default API_GMAIL;
