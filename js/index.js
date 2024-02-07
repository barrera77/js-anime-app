const url = "https://api.jikan.moe/v4/top/anime?bypopularity/pictures";
const animeGrid = document.querySelector("#anime-grid");
const darkModeSwitch = document.querySelector("#dark-mode-switch");
const playButton = document.querySelector("#play-button");

darkModeSwitch.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("dark");
});

fetchAnimeData();

async function fetchAnimeData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch a resource");
    }
    const data = await response.json();

    data.data.forEach((anime) => {
      //Access the anime URLs and create img elements
      const imgUrl = anime.images.jpg.image_url;
      const animeTitle = anime.title;
      const seriesType = anime.type;

      if (imgUrl) {
        //map images to a card
        animeGrid.innerHTML += `
      <div id="card">              
        <figure>    
          <div id="series-type">${seriesType}</div>         
          <img id="card-image" src="${imgUrl}" alt="Anime Poster">               
          <div id="play-button-container">
           <a href="">
              <img
                id="play-button"
                src="/assets/play-button-black.png"
                alt="play-button"
                />
            </a>
          </div>
        </figure>
        <figcaption>${animeTitle}</figcaption>
      </div>`;
      }
    });
    console.log(data);
  } catch (error) {
    console.error("Error: " + error);
  }
}
