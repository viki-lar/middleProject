"use strict";

const slider = () => {
  try {
    const sliderBlock = document.querySelector(".slider");
    const slides = document.querySelectorAll(".service-block");

    const timeInterval = 3000;
    let currentSlide = 0;
    let count;
    let interval;

    slides.forEach(slide, () => {
      if (screen.width >= 576) {
        elems[index].style.display = "none";
        elems[index + 1].style.display = "none";
      }
    });

    //переключение на следующий слайд
    const prevSlide = (elems, index) => {
      if (screen.width >= 576) {
        elems[index].style.display = "none";
        elems[index + 1].style.display = "none";
      } else {
        elems[index].style.display = "none";
      }
    };
    //переключение на предыдущий слайд
    const nextSlide = (elems, index) => {
      if (screen.width >= 576) {
        elems[index].style.display = "block";
        elems[index + 1].style.display = "block";
      } else {
        elems[index].style.display = "block";
      }
    };

    // автоматическое переключение слайдов
    const autoSlide = () => {
      prevSlide(slides, currentSlide);
      if (screen.width >= 576) {
        currentSlide += +2;
      } else {
        currentSlide++;
      }
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      nextSlide(slides, currentSlide);
    };

    //запуск автоматического переключения
    const startSlide = (timer = 2000) => {
      interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
      clearInterval(interval);
    };

    //переключение по кнопкам
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.classList.contains("services__arrow")) {
        return;
      }
      prevSlide(slides, currentSlide);

      if (e.target.closest(".services__arrow--right")) {
        if (screen.width >= 576) {
          currentSlide += +2;
        } else {
          currentSlide++;
        }
      } else if (e.target.closest(".services__arrow--left")) {
        if (screen.width >= 576) {
          currentSlide -= -2;
        } else {
          currentSlide--;
        }
      }

      //проверка счетчика и длины массива со слайдами
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide);
    });

    //остановка слайдера при наведении на кнопки
    sliderBlock.addEventListener(
      "mouseenter",
      (e) => {
        if (e.target.matches(".services__arrow")) {
          stopSlide();
        }
      },
      true
    );

    //запуск слайдера после наведения на кнопки

    sliderBlock.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.matches(".services__arrow")) {
          startSlide(timeInterval);
        }
      },
      true
    );

    startSlide(timeInterval);
  } catch (error) {}
};

export default slider;
