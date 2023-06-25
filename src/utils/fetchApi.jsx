import axios from "axios";
import toast from "react-hot-toast";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchApi = async (url, query) => {
  try {
    const { data } = await axios.get(url, {
      params: {
        city: query,
        key: API_KEY,
      },
    });
    return data;
  } catch (err) {
    return toast.error(err.message, { duration: 2000 });
  }
};
