const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("-scale-x-0");
  mobileMenu.classList.toggle("-scale-x-100");
});
