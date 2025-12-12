import axios from "axios";

// Fetch News Function
export const fetchNews = async () => {
  try {
    const url = "https://api.spaceflightnewsapi.net/v4/articles";
    const response = await axios.get(url);

    const articles = response.data.results || [];

    // MAPPING API → Your Required Fields
    const formatted = articles.map((item) => ({
      id: item.id.toString(),
      title: item.title || "No Title",
      imageUrl: item.image_url,
      content: item.summary,
      author: item.news_site,
      url: item.url || "",
    }));

    return formatted;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
