const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    pagination: {
      el: ".pagination",
      bulletClass: 'pagination__button',
      bulletActiveClass: 'pagination__button--active',
    },
    navigation: {
      nextEl: ".carousel-button.next",
      prevEl: ".carousel-button.prev",
    },
  }
});