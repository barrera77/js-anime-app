function handleAnimeCardComponent({
  animeId,
  seriesType,
  imgUrl,
  trailerUrl,
  animeTitle,
}) {
  const animeCardComponent = `
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

  return animeCardComponent;
}

export { handleAnimeCardComponent };
