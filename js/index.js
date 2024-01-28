const url = "https://api.jikan.moe/v4";
const grid = document.querySelector("#grid");

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
        if (imgUrl) {
          //map images to a card
          grid.innerHTML += `
            <div id="card">
              <figure>
                <img id="card-image" src="${imgUrl}" alt="Anime Poster">
              </figure>
            </div>`;
        }
      });
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
getAnimeImages();
