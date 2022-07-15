import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay, Navigation]);

const slider = () => {
  const swiper2 = new Swiper(".row", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      2560: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
};

export default slider;
