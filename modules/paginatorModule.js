import { renderPaginatorComponent } from "../components/paginator.js";
import ApiClient from "../services/api-client.js";
import { handleAnimeGridModule } from "../modules/animeGridModule.js";

const paginatorContainer = document.querySelector("#paginator-container");
const animeGrid = document.querySelector("#anime-grid");

async function handlePaginatorModule() {
  //render paginator
  paginatorContainer.innerHTML = renderPaginatorComponent();

  //Get components
  //<span> showing the last visible page counter
  const lastPageNumber = document.querySelector("#last-page-number");
  //<span> showing the current page
  const currentPageNumber = document.querySelector("#current-page-number");

  //Button to move to the next page number counter
  const nextPageNumber = document.querySelector("#next-page-number");
  nextPageNumber.addEventListener("click", onHandleNextPage);

  //Button to move to the previous page number
  const previousPageNumber = document.querySelector("#previous-page-number");
  previousPageNumber.addEventListener("click", onHandlePreviousPage);

  //Query the API for anime data
  const apiclient = new ApiClient("?bypopularity");
  const animeList = await apiclient.getAnimeData(
    Number(currentPageNumber.textContent)
  );

  //Create variables for the page counters
  let currentPage = animeList.pagination.current_page;
  let lastPage = animeList.pagination.last_visible_page;

  //Initialize counters on the paginator
  currentPageNumber.textContent = currentPage;
  lastPageNumber.textContent = lastPage;

  //render next page
  async function onHandleNextPage(e) {
    e.preventDefault();

    const hasNextPage = animeList.pagination.has_next_page;

    if (hasNextPage) {
      currentPage += 1;
      currentPageNumber.textContent = currentPage;

      loadNextPage(currentPage);
    }
  }

  //render previous page
  async function onHandlePreviousPage(e) {
    e.preventDefault();

    const hasNextPage = animeList.pagination.has_next_page;

    if (currentPage > 1) {
      currentPage -= 1;

      currentPageNumber.textContent = currentPage;

      loadNextPage(currentPage);
    }
  }

  //Create the next page
  async function loadNextPage(page) {
    animeGrid.innerHTML = ""; //clear current cards

    try {
      const { data, pagination } = await apiclient.getAnimeData(page);
      // Update pagination counters
      lastPageNumber.textContent = pagination.last_visible_page;
      currentPageNumber.textContent = pagination.current_page;
      console.log("Anime data:", data);

      //render next page's cards
      handleAnimeGridModule(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export { handlePaginatorModule };
