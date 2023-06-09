// burger
const burger = document.querySelector(".burger"),
  list = document.querySelector(".nav_list");

burger.addEventListener("click", () => {
  list.classList.toggle("active");
});
// burger

// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  onlyInViewport: true,
  draggable: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 15,
    slideShadows: false,
    depth: 10,
    slideShadows: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});
// swiper

// accordions
const plus = document.querySelectorAll(".plus"),
  txts = document.querySelectorAll(".question_accordion-txt");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener('click', () => {
    txts[i].classList.toggle('active2')
  })
}
// accordions
