import { renderNavbarComponent } from "../components/navbar.js";
const navbarContainer = document.querySelector("#navbar-container");

function handleNavbarModule() {
  navbarContainer.innerHTML = renderNavbarComponent();

  //Toggle dark mode
  const darkModeSwitch = document.querySelector("#dark-mode-switch");
  darkModeSwitch.addEventListener("change", () => {
    document.querySelector("html").classList.toggle("dark");

    document.querySelector("#login-logo").style.filter = "invert(100%)";
  });
}

export { handleNavbarModule };
