const url = "https://api.jikan.moe/v4/top/anime";

async function fetchAnimeData(page) {
  try {
    const response = await fetch(`${url}?page=${page}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Usage example:
const page = 1; // You can change the page number here
fetchAnimeData(page)
  .then((animeData) => {
    if (animeData) {
      console.log("Anime data:", animeData);
    } else {
      console.log("No anime data available.");
    }
  })
  .catch((error) => console.error("Error:", error));
