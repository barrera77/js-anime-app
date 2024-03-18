import { fetchAnimeTrailer } from "../components/modal.js";
import ApiClient from "../services/api-client.js";
import { renderPaginatorComponent } from "../components/paginator.js";
import { handleNavbarModule } from "../modules/navbarModule.js";
import("/components/modal.js");

import { fetchAnimeData } from "../js/data.js";

const url = "https://api.jikan.moe/v4/top/anime?bypopularity/pictures";
const endpoint = "";
const animeGrid = document.querySelector("#anime-grid");
const playButton = document.querySelector("#play-button");
const paginatorContainer = document.querySelector("#paginator-container");

const playTrailer = document.querySelector("#btn-play");
//playTrailer.addEventListener("click", handlePlayTrailerClick);

//render navbar
handleNavbarModule();

//render paginator
paginatorContainer.innerHTML = renderPaginatorComponent();

const lastPageNumber = document.querySelector("#last-page-number");

const nextPageNumber = document.querySelector("#next-page");
nextPageNumber.addEventListener("click", onHandleNextPage);

const previousPageNumber = document.querySelector("#previous-page-number");
previousPageNumber.addEventListener("click", onHandlePreviousPage);

const currentPageNumber = document.querySelector("#current-page-number");

//Query the API for anime data
const apiclient = new ApiClient("?bypopularity");
const animeList = await apiclient.getAnimeData(
  Number(currentPageNumber.textContent)
);

//Create variables for the current page counters
let nextPage = animeList.pagination.current_page;
let lastPage = animeList.pagination.last_visible_page;

//Initialize counters on the paginator
lastPageNumber.textContent = lastPage;
currentPageNumber.textContent = nextPage;

//click event handler for playTrailer click
async function handlePlayTrailerClick(event) {
  const trailerUrl = event.currentTarget.dataset.trailerUrl;

  if (trailerUrl) {
    console.log("Trailer URL: ", trailerUrl);
    fetchAnimeTrailer(trailerUrl);
  } else {
    console.log("no trailer available for this anime");
  }
}

async function onHandleNextPage(e) {
  e.preventDefault();

  const hasNextPage = animeList.pagination.has_next_page;

  if (hasNextPage) {
    nextPage += 1;
    console.log(nextPage);
    currentPageNumber.textContent = nextPage;
    lastPageNumber.textContent = lastPage -= 1;

    loadNextPage(nextPage);
  }
}

function onHandlePreviousPage(e) {
  e.preventDefault();

  if (nextPage > 1) {
    nextPage -= 1;
    console.log(nextPage);
    currentPageNumber.textContent = nextPage;
    lastPageNumber.textContent = lastPage += 1;
  }
}

//Fetch the anime data and display it

/* async function fetchAnimeData() {
  try {
    animeList.data.forEach((anime) => {
      //Access the anime URLs and create img elements
      const imgUrl = anime.images.jpg.image_url;
      const animeTitle = anime.title;
      const seriesType = anime.type;
      const animeId = anime.mal_id;
      const trailerUrl = anime.trailer.youtube_id;

      if (imgUrl) {
        //map images to a card
        animeGrid.innerHTML += `
      <div id="card-${animeId}" class="card">              
        <figure>    
          <div id="series-type">${seriesType}</div>         
          <img id="card-image" src="${imgUrl}" alt="Anime Poster">               
          <div id="play-button-container">
           <button class="btn-play" data-trailer-url="${trailerUrl}">
              <img
                id="play-button"
                src="/assets/play-button-black.png"
                alt="play-button"
                />
            </button>
          </div>
        </figure>
        <figcaption>${animeTitle}</figcaption>
      </div>`;
      }
    });

    //Create click event listener to play buttons
    const playButtons = document.querySelectorAll(".btn-play");
    playButtons.forEach((button) =>
      button.addEventListener("click", handlePlayTrailerClick)
    );
  } catch (error) {
    console.error("Error fetching anime data: ", error);
  }
}
 */
//fetchAnimeData();
//getAnimePages(1);

//Set paginator initial values
/* async function getAnimePages(page) {
  const animePages = await apiclient.getAnimeData(page);
  const currentPage = animePages.pagination.current_page;
  const lastVisiblePage = animePages.pagination.last_visible_page;

  currentPageNumber.textContent = currentPage;
  lastPageNumber.textContent = lastVisiblePage;
} */

/* async function getAnimePages(page) {
  const animePages = await apiclient.getAnimeData(page);
  const currentPage = animePages.pagination.current_page;
  const lastVisiblePage = animePages.pagination.last_visible_page;

  return { currentPage, lastVisiblePage };
} */

//Create the next page
async function loadNextPage(page) {
  animeGrid.innerHTML = ""; //clear cards

  try {
    const animeData = await fetchAnimeData(page);

    if (animeData) {
      console.log("Anime data:", animeData);
    } else {
      console.log("No anime data available.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

//-------------------TESTER--------------------------------------------
/* const apiClient = new ApiClient("?bypopularity");
async function fetchAnimeData(page) {
  try {
    const animeList = await apiClient.getAnimeData(page);

    console.log(animeList.pagination.current_page);
  } catch (error) {
    console.error(error);
  }
}
fetchAnimeData(5); */
