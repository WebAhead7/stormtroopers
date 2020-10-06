const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggleNavbar");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
