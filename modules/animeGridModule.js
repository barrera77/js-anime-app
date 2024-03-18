import { handleAnimeCardComponent } from "../components/animeCard.js";
const animeGrid = document.querySelector("#anime-grid");

function handleAnimeGridModule(data) {
  try {
    data.forEach((anime) => {
      //Access the anime URLs and create img elements
      const imgUrl = anime.images.jpg.image_url;
      const animeTitle = anime.title;
      const seriesType = anime.type;
      const animeId = anime.mal_id;
      const trailerUrl = anime.trailer.youtube_id;

      if (imgUrl) {
        //map images to a card
        animeGrid.innerHTML += handleAnimeCardComponent({
          animeId,
          seriesType,
          imgUrl,
          trailerUrl,
          animeTitle,
        });
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

export { handleAnimeGridModule };
