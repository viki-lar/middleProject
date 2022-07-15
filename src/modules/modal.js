"use strict";

import { animate } from "./helpers";

const modal = (btnClass, modalClass, overlayClass, modalCloseClass) => {
  const headerBtn = document.querySelectorAll(btnClass);
  const modal = document.querySelector(modalClass);
  const overlay = document.querySelector(overlayClass);

  // создание элемента
  const calcWidth = () => {
    let div = document.createElement("div");
    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";

    // мы должны вставить элемент в документ, иначе размеры будут равны 0
    document.body.append(div);

    // рассчет ширины скролла
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();
    return scrollWidth;
  };

  const fix = () => {
    document.body.style.overflowY = " hidden";
    document.body.style.paddingRight = calcWidth() + "px";
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

  const close = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0px";
  };

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains(modalCloseClass)) {
      close();
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      close();
    }
  });
};

export default modal;
export { modal };
