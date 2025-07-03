var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

/* swiper slide products */

var swiper = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1200: { slidesPerView: 5, spaceBetween: 20 },
    900: { slidesPerView: 4, spaceBetween: 20 },
    600: { slidesPerView: 3, spaceBetween: 20 },
    0: { slidesPerView: 2, spaceBetween: 10 },
  },
});
