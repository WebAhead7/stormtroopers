const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggleNavbar");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/*AWWAD:  Some Animation for members pic*/
let usersPics = document.querySelectorAll(".users-pic");
usersPics.forEach((img) => {
  img.addEventListener("mouseover", function () {
    img.classList.add("rotate-pic");
    setTimeout(() => img.classList.remove("rotate-pic"), 0.4 * 1000);
  });
});

/*AWWAD:  Some Animation for members seection*/
let membersSec = document.querySelector(".users-info");
membersSec.addEventListener("mouseenter", function () {
  usersPics.forEach((img) => {
    img.classList.add("rotate-pic");
    setTimeout(() => img.classList.remove("rotate-pic"), 0.4 * 1000);
  });
});
