import ApiClient from "../services/api-client.js";

const animeModal = document.querySelector("#static-modal");

//Query the API for anime data
const apiclient = new ApiClient("?bypopularity");

//fetch anime trailers based on an animeId
async function fetchAnimeTrailer(animeId) {
  try {
    const trailerInfo = await apiclient.getAnimeTrailers(animeId);

    //get trailer Url from trailerInfo
    const trailerUrl = trailerInfo.url;

    const modalWindow = `
    //add modal to frame
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">               
            </div>
            <!-- Video frame -->
            <div class="p-4">
                <iframe src="${trailerUrl}" frameborder="0" allowfullscreen class="w-full aspect-video"></iframe>
            </div>
        </div>
    </div>`;

    //Set Modal content
    animeModal.innerHTML = modalWindow;
    animeModal.classList.remove("hidden");

    return trailerInfo;
  } catch (error) {
    console.error("Error fetching anime data: ", error);
    return null;
  }
}

export { fetchAnimeTrailer };
