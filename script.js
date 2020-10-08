const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggleNavbar");
// const name = document.querySelector("#name").value;
const submit = document.querySelector(".submit");
let scrolled = window.scrollY;

const name = document.querySelector("#name");
const email = document.querySelector("#contact-email");
const telephone = document.querySelector("#fon");
const message = document.querySelector("#msg");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

let usersPics = document.querySelectorAll(".users-pic");
/*AWWAD:  Some Animation for members seection*/
let membersSec = document.querySelector(".users-info");
window.addEventListener("scroll", function () {
  const scrollBefore = 1155;
  usersPics.forEach((img) => {
    scrollBefore <= scrolled
      ? img.classList.add("rotate-pic")
      : img.classList.remove("rotate-pic");
  });
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  contactUs();
});

const contactUs = () => {
  name.value &&
    email.value &&
    telephone.value &&
    message.value &&
    alert(
      `Hi ${name.value}, Thank you for contacting us! we'll contact you as soon as possible.`
    );
};
