import "../css/styles.css";

export default function App() {
  return (
    <div id="container" class="text-[100%] m-auto max-w:[1370px] font">
      <nav
        id="navbar"
        class="flex justify-between max-w-[1370px] m-auto p-2 items-center text-xl"
      >
        <div
          id="logo-container"
          class="m-5 h-[90px] w-[120px] overflow-hidden py-2"
        >
          <a href="">
            <img
              src="/assets/images/logo5.png"
              alt="left-logo"
              width="366"
              height="217"
              class="object-cover"
            />
          </a>
        </div>
        <div id="nav-links" class="small-caps font-semibold text-[23px]">
          <ul class="flex list-none items-center">
            <li class="mr-[30px]">Genre</li>
            <li class="mr-[30px]">Types</li>
            <li class="mr-[30px]">Updated</li>
            <li class="mr-[30px]">Ongoing</li>
            <li class="mr-[30px]">Upcoming</li>
            <li class="mr-[30px]">Scheduled</li>
          </ul>
        </div>
        <div class="flex flex-wrap items-center small-caps font-bold">
          <div id="switch" class="mr-2">
            <input id="dark-mode-switch" type="checkbox" />
            <span id="slider"></span>
          </div>
          <label for="switch">Dark Mode</label>
        </div>
        <div class="flex flex-wrap items-center small-caps">
          <img
            class="w-[2.5rem] h-[2.5rem]"
            src="/assets/avatar.png"
            alt="Right Logo"
          />
          <a href="" class="ml-2">
            Sign In
          </a>
        </div>
      </nav>

      <div id="banner" class="max-w-[1370px] mt-[1rem] m-auto">
        <ul class="slideshow" class="list-none">
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>

      <div id="anime-grid" class="max-w-[1370px] m-auto mt-[1rem]">
        <div id="card">
          <div id="series-type"></div>
          <figure class="items-center">
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
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
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
          <figcaption>Title</figcaption>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
        <div id="card">
          <figure>
            <img
              id="card-image"
              src="/assets/images/logo4.png"
              alt="Anime Poster"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
