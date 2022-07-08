const toggleMenu = document.querySelector('.toggle-menu');
let menuOpen = document.querySelector('.fa-bars');
let menuClose = document.querySelector('.fa-times');
let menu = document.querySelector('.menu');
// const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.addEventListener("click", function() {
  toggleMenu.classList.toggle("active");
  menuOpen.classList.toggle("hide");
  menuClose.classList.toggle("active");
  menu.classList.toggle("active");
});