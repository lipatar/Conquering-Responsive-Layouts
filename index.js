const toggleMenu = document.querySelector('.toggle-menu');
let toggleBars = document.querySelector('.fa-bars');
let toggleTimes = document.querySelector('.fa-times');
let toggleDesktopMenu = document.querySelector('.menu');
// const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener("click", function() {
  toggleMenu.classList.toggle("active");
  toggleBars.classList.toggle("hide");
  toggleTimes.classList.toggle("active");
  toggleDesktopMenu.classList.toggle("active");
});