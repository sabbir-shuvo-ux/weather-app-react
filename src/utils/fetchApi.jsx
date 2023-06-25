import axios from "axios";

export const fetchApi = async (query) => {
  const URL = "https://api.weatherbit.io/v2.0/forecast/daily";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const { data } = await axios.get(URL, {
    params: {
      city: query,
      key: API_KEY,
    },
  });

  return data;
};
