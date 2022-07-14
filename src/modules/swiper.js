import Swiper from "swiper";

const swiper = () => {
  const swiper1 = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    initialSlide: 1,
  });
};

export default swiper;
