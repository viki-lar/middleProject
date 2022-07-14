"use strict";

import { animate } from "./helpers";

const modal = (btnClass, modalClass, overlayClass, modalCloseClass) => {
  const headerBtn = document.querySelectorAll(btnClass);
  const modal = document.querySelector(modalClass);
  const overlay = document.querySelector(overlayClass);

  const scroll = document.querySelector(".smooth-scroll");

  let scrollWidth = scroll.offsetWidth - scroll.clientWidth;

  const fix = () => {
    let pagePos = window.scrollY;
    document.body.style.top = `-${pagePos}px`;
    overlay.style.position = "fixed";
    document.body.style.position = "fixed";
    document.body.style.overflowY = " hidden";
    document.body.style.paddingRight = scrollWidth;
  };

  //вызов модального окна при нажатии на кнопку
  headerBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      fix();

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

  const close = (modal, overlay) => {
    let pagePos = window.scrollY;
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.position = "static";
    document.body.style.overflowY = "";

    document.body.style.top = `-${pagePos}px`;
  };

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains(modalCloseClass)) {
      close(modal, overlay);
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      close(modal, overlay);
    }
  });
};

export default modal;
