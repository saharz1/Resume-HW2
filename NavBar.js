const openMenuButton = document.querySelector("#mobile-nav button");
openMenuButton.addEventListener("click", function () {
  const menu = document.querySelector(".floating-menu");
  menu.style.transform = "translateX(0)";
  menu.style.backgroundColor = "Lime";
});
const closeMenuButton = document.querySelector("#close-menu");
closeMenuButton.addEventListener("click", function () {
  const menu = document.querySelector(".floating-menu");
  menu.style.transform = "translateX(-120%)";
  menu.style.backgroundColor = "Aqua";
});
