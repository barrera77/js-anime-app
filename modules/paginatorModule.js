import { renderPaginatorComponent } from "../components/paginator.js";
import ApiClient from "../services/api-client.js";
import { handleAnimeGridModule } from "../modules/animeGridModule.js";

const paginatorContainer = document.querySelector("#paginator-container");
const animeGrid = document.querySelector("#anime-grid");

async function handlePaginatorModule() {
  //render paginator
  paginatorContainer.innerHTML = renderPaginatorComponent();

  //Get components

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

  //TODO fix next page logic(lastpage not rendering proper actual number)
  //render next page
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
  //TODO fix previous page logic(lastpage not rendering proper actual number)
  //render previous page
  async function onHandlePreviousPage(e) {
    e.preventDefault();

    const hasNextPage = animeList.pagination.has_next_page;
    const currentPage = currentPageNumber.textContent;

    if (currentPage > 1) {
      nextPage -= 1;
      currentPage = nextPage;
      lastPageNumber.textContent = lastPage -= 1;
      loadNextPage(nextPage);
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
