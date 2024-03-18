//import { fetchAnimeTrailer } from "../components/modal.js";
import ApiClient from "../services/api-client.js";
import { handlePaginatorModule } from "../modules/paginatorModule.js";
import { handleNavbarModule } from "../modules/navbarModule.js";
import { handleAnimeGridModule } from "../modules/animeGridModule.js";
import("/components/modal.js");

/* const url = "https://api.jikan.moe/v4/top/anime?bypopularity/pictures";
const endpoint = "";
const playTrailer = document.querySelector("#btn-play");
playTrailer.addEventListener("click", handlePlayTrailerClick); */

//Query the API for anime data
const apiclient = new ApiClient("?bypopularity");

//render navbar
handleNavbarModule();

//render paginator
handlePaginatorModule();

//Fetch the initial anime data and display it
const currentPageNumber = document.querySelector("#current-page-number");

async function fetchInitialAnimeData() {
  try {
    const pageNumber = Number(currentPageNumber.textContent);
    const { data } = await apiclient.getAnimeData(pageNumber);
    console.log(data);

    handleAnimeGridModule(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchInitialAnimeData();
