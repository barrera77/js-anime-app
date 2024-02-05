const avatarUrl = "https://api.dicebear.com/7.x/lorelei/svg?seed=Felix";
const url = "https://api.jikan.moe/v4";
const animeGrid = document.querySelector("#anime-grid");
const darkModeSwitch = document.querySelector("#dark-mode-switch");
const playButton = document.querySelector("#play-button");
const cardImage = document.querySelector("#card-image");
const animeCard = document.querySelector("#card");

darkModeSwitch.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("dark");
});

/* async function getAnimeImages() {
  try {
    const response = await fetch(url, options);
    const result = await response.jason();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
getAnimeImages(); */

function getAnimeImages() {
  fetch(url + "/top/anime?genre=14/pictures")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Iterate through the anime objects in the data array
      data.data.forEach(function (anime) {
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
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
getAnimeImages();

//Pagination with InfinteScroll
/* let elem = document.querySelector("#anime-grid");
let infScroll = new InfiniteScroll(elem, {
  //options
  path: url + "/top/anime?page={}",
  append: ".post",
  history: false,
});

console.log(url + "/top/anime?genre=14/current_page=2"); */

//Element argument can be a selector string
//For an individual element
/* let infScroll = new InfiniteScroll(animeGrid, {
  //options
}); */

/* function getPages() {
  fetch(url + "/top/anime?page=3")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data);
    });
}
getPages(); */

//Display cards with infinte scroll
const viewportHeight = document.documentElement.clientHeight;

window.addEventListener("scroll", function (e) {
  //Checked if scrolled position is greater or equal to the page height
  const scrolledY = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const scrolledToEnd = scrolledY + viewportHeight >= pageHeight - 30;

  console.log(scrolledY);
  console.log(scrolledToEnd);

  //if yes append a group of cards group to the DOM
  if (scrolledToEnd) {
    getAnimeImages();
  }
});
