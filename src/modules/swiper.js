import Swiper, { Autoplay } from "swiper";

Swiper.use([Autoplay]);

let nx = document.getElementsByClassName("swiper-next")[0];
let pr = document.getElementsByClassName("benefits__arrow--left")[0];
console.log(nx);
console.log(pr);
const swiper = () => {
  const swiper1 = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".benefits__arrow--left",
      prevEl: ".benefits__arrow--right",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
};

export default swiper;
