function renderNavbarComponent() {
  const navbarComponent = `
<nav
        id="navbar"
        class="flex justify-between max-w-[1280px] m-auto p-2 items-center small-caps"
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
          /></a>
        </div>
        <div id="nav-links" class="small-caps font-semibold">
          <ul class="flex list-none items-center">
            <li id="link"><a href="">Genre</a></li>
            <li id="link"><a href="">Types</a></li>
            <li id="link"><a href="">Updated</a></li>
            <li id="link"><a href="">Ongoing</a></li>
            <li id="link"><a href="">Upcoming</a></li>
            <li id="link"><a href="">Scheduled</a></li>
          </ul>
        </div>
        <div class="flex flex-wrap items-center small-caps font-bold">
          <div id="switch" class="mr-2">
            <input id="dark-mode-switch" type="checkbox" onchange="" />
            <span id="slider"></span>
          </div>
          <span for="switch">Dark Mode</span>
        </div>
        <div class="flex flex-wrap items-center small-caps">
          <img
            id="login-logo"
            class="w-[2.5rem] h-[2.5rem]"
            src="/assets/avatar.png"
            alt="Right Logo"
          />
          <a href="" class="ml-2">Sign In</a>
        </div>
      </nav>
`;

  return navbarComponent;
}

export { renderNavbarComponent };
