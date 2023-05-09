// code navbar responsiveness
const menu = document.querySelector(".menu");
const navLinks = document.getElementById("nav-contents");
const navLinksLi = document.querySelectorAll(".nav-contents a");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active")
});


// code for testimonials swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });