import { fetchAnimeTrailer } from "../components/modal.js";
import ApiClient from "../services/api-client.js";
import("/components/modal.js");

const url = "https://api.jikan.moe/v4/top/anime?bypopularity/pictures";
const endpoint = "";
const animeGrid = document.querySelector("#anime-grid");
const darkModeSwitch = document.querySelector("#dark-mode-switch");
const playButton = document.querySelector("#play-button");
const currentPageNumber = document.querySelector("#current-page-number");
const lastPageNumber = document.querySelector("#last-page-number");

const playTrailer = document.querySelector("#btn-play");
//playTrailer.addEventListener("click", handlePlayTrailerClick);

const nextPageNumber = document.querySelector("#next-page");
nextPageNumber.addEventListener("click", onHandleNextPage);

const previousPageNumber = document.querySelector("#previous-page-number");
previousPageNumber.addEventListener("click", onHandlePreviousPage);

//Toggle dark mode
darkModeSwitch.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("dark");

  document.querySelector("#login-logo").style.filter = "invert(100%)";
});

//click event handler for playTrailer click
async function handlePlayTrailerClick(event) {
  const animeId = event.currentTarget.dataset.animeId;
  const trailerInfo = await fetchAnimeTrailer(animeId);

  if (trailerInfo) {
    console.log("Trailer info: ", trailerInfo);
  } else {
    console.log("no trailer available for this anime");
  }
}

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

async function onHandleNextPage(e) {
  e.preventDefault();

  const hasNextPage = animeList.pagination.has_next_page;

  if (hasNextPage) {
    nextPage += 1;
    console.log(nextPage);
    currentPageNumber.textContent = nextPage;
    lastPageNumber.textContent = lastPage -= 1;
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
async function fetchAnimeData() {
  try {
    animeList.data.forEach((anime) => {
      //Access the anime URLs and create img elements
      const imgUrl = anime.images.jpg.image_url;
      const animeTitle = anime.title;
      const seriesType = anime.type;
      const animeId = anime.mal_id;

      if (imgUrl) {
        //map images to a card
        animeGrid.innerHTML += `
      <div id="card-${animeId}" class="card">              
        <figure>    
          <div id="series-type">${seriesType}</div>         
          <img id="card-image" src="${imgUrl}" alt="Anime Poster">               
          <div id="play-button-container">
           <button id="btn-play">
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
  } catch (error) {
    console.error("Error fetching anime data: ", error);
  }
}

fetchAnimeData();
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
}
 */
//Create the next page
async function loadNextPage(page) {
  animeGrid.innerHTML = ""; //clear cards
  await fetchAnimeData(page); //Load next set of anime cards
}

//-------------------TESTER--------------------------------------------
/* const apiclient = new ApiClient("?bypopularity");
async function fetchAnimeData(page) {
  try {
    const animeList = await apiclient.getAnimeData(page);

    console.log(animeList.pagination.current_page);
  } catch (error) {
    console.error(error);
  }
}
fetchAnimeData(5); */
