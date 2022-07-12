"use strict";

import { animate } from "./helpers";

const modal = (btnClass, modalClass, overlayClass, modalCloseClass) => {
  const headerBtn = document.querySelectorAll(btnClass);
  const modal = document.querySelector(modalClass);
  const overlay = document.querySelector(overlayClass);

  //вызов модального окна при нажатии на кнопку
  headerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let pagePos = window.scrollY;
      console.log(pagePos);
      document.body.style.position = "fixed";
      document.body.style.top = `-${pagePos}px`;

      // проверка экрана устройства
      if (screen.width <= 768) {
        modal.style.display = "block";
        overlay.style.display = "block";
      } else {
        // анимация
        modal.style.display = "block";
        overlay.style.display = "block";
        animate({
          duration: 500,
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
  });

  //закрытие модального окна по клику мимо и при нажатии на кнопку закрыть

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains(modalCloseClass)) {
      modal.style.display = "none";
      overlay.style.display = "none";
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      modal.style.display = "none";
      overlay.style.display = "none";

      document.body.style.position = "";
      document.body.style.top = "";
    }
  });
};

export default modal;
