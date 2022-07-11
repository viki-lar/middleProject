import { animate } from "./helpers";

const modal = () => {
  const headerBtn = document.getElementById("header-btn");
  const modal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");
  const modalCloseBtn = modal.querySelector(".header-modal__close");
  console.log(headerBtn);

  //вызов модульного окна при нажатии на кнопку

  headerBtn.addEventListener("click", () => {
    // проверка экрана устройства
    if (screen.width <= 768) {
      modal.style.display = "block";
      overlay.style.display = "block";
    } else {
      // анимация
      modal.style.display = "block";
      overlay.style.display = "block";
      animate({
        duration: 1000,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw(progress) {
          const windowInnerHeight = document.documentElement.clientHeight;
          modal.style.top = progress * (windowInnerHeight / 3 + 200) + "px";
        },
      });
    }
  });

  //закрытие модального окна по клику мимо и при нажатии на кнопку закрыть

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("header-modal__close")) {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  });
};

export default modal;
