import Swiper, { Autoplay, Navigation } from "swiper";

Swiper.use([Autoplay, Navigation]);

const swiper = () => {
  try {
    const swiper = new Swiper(".swiper", {
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
        nextEl: ".benefits__arrow--right",
        prevEl: ".benefits__arrow--left",
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
  } catch (error) {}
};

export default swiper;
