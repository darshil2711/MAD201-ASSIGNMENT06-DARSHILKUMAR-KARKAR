import axios from "axios";

export const fetchNews = async () => {
  const url = "https://inshortsapi.vercel.app/news?category=technology";
  const response = await axios.get(url);
  return response.data.data;
};
