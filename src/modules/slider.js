import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay, Navigation]);

const slider = () => {
  try {
    const swiper2 = new Swiper(".swiper-row", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,

      navigation: {
        nextEl: ".services__arrow--right",
        prevEl: ".services__arrow--left",
      },

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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
  } catch (error) {}
};

export default slider;
