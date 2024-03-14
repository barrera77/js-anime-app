const url = "https://api.jikan.moe/v4/top/anime";

/* Class to query the API to get data and pagination info filtered by top-anime
https://api.jikan.moe/v4/top/anime?page=${page} */
class ApiClient {
  constructor(endpoint) {
    this.url = url;
    this.endpoint = endpoint;
  }
  async getAnimeData(page) {
    try {
      const response = await fetch(`${this.url}${this.endpoint}&page=${page}`);

      if (!response.ok) {
        throw new Error("Incorrect network response");
      }

      const { data, pagination } = await response.json();
      return { data, pagination };
    } catch (error) {
      throw error;
    }
  }

  //fetch anime data details by id
  async getAnimeDataById(animeId) {
    try {
      const response = await fetch(`${this.url}/anime/${animeId}`);

      if (!response.ok) {
        throw new Error("Incorrect network response");
      }

      const animeDetails = await response.json();
      return animeDetails;
    } catch (error) {
      throw error;
    }
  }
}
export default ApiClient;
