const menuElement = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu__link");

menuElement.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (ev.target.classList.contains("menu__link")) {
    menuLinks.forEach((menuLink) => {
      menuLink.classList.remove('menu__link--primary')
    });
    ev.target.classList.add('menu__link--primary');
  }
});
