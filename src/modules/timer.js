"use strict";

const timer = (deadline) => {
  //получение элементов со страницы
  const timerDays = document.querySelectorAll("#timer-days");
  const timerHours = document.querySelectorAll("#timer-hours");
  const timerMinutes = document.querySelectorAll("#timer-minutes");
  const timerSeconds = document.querySelectorAll("#timer-seconds");

  const nameDays = document.querySelectorAll("#days");
  const nameHours = document.querySelectorAll("#hours");
  const nameMinutes = document.querySelectorAll("#minutes");
  const nameSeconds = document.querySelectorAll("#seconds");

  const getTimeRemaining = function () {
    //получаем точки времени в миллисекундах
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();

    // получаем оставшееся время в секундах

    let timeRemaining = (dateStop - dateNow) / 1000;

    // получаем дни,часы, минуты,секунды
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    // функция возвращает объект
    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    // получаем объект
    let getTime = getTimeRemaining();

    // передаем значения на страницу
    const changeTime = (arg) => {
      if (arg < 0) {
        return "00";
      } else if (arg < 10) {
        return "0" + arg;
      } else {
        return arg;
      }
    };

    //замена контекста
    timerDays.forEach((item) => {
      item.textContent = changeTime(getTime.days);
    });
    timerHours.forEach((item) => {
      item.textContent = changeTime(getTime.hours);
    });
    timerMinutes.forEach((item) => {
      item.textContent = changeTime(getTime.minutes);
    });

    timerSeconds.forEach((item) => {
      item.textContent = changeTime(getTime.seconds);
    });

    //замена текста
    if (getTime.days % 10 == 1 && getTime.days != 11) {
      nameDays.forEach((item) => {
        item.textContent = "День";
      });
    } else if (getTime.days % 10 <= 4 && getTime.days != 0) {
      nameDays.forEach((item) => {
        item.textContent = "Дня";
      });
    } else {
      nameDays.forEach((item) => {
        item.textContent = "Дней";
      });
    }

    if (getTime.hours % 10 == 1 && getTime.hours != 11) {
      nameHours.forEach((item) => {
        item.textContent = "Час";
      });
    } else if (getTime.hours % 10 <= 4 && getTime.hours != 0) {
      nameHours.forEach((item) => {
        item.textContent = "Часов";
      });
    } else {
      nameHours.forEach((item) => {
        item.textContent = "Часа";
      });
    }

    if (getTime.minutes % 10 == 1 && getTime.minutes != 11) {
      nameMinutes.forEach((item) => {
        item.textContent = "Mинута";
      });
    } else if (
      getTime.minutes % 10 <= 4 &&
      getTime.minutes != 11 &&
      getTime.minutes != 12 &&
      getTime.minutes != 13 &&
      getTime.minutes != 14 &&
      getTime.minutes % 10 != 0
    ) {
      nameMinutes.forEach((item) => {
        item.textContent = "Mинуты";
      });
    } else {
      nameMinutes.forEach((item) => {
        item.textContent = "Mинут";
      });
    }

    if (getTime.seconds % 10 == 1 && getTime.seconds != 11) {
      nameSeconds.forEach((item) => {
        item.textContent = "Cекунда";
      });
    } else if (
      getTime.seconds % 10 <= 4 &&
      getTime.seconds % 10 != 0 &&
      getTime.seconds != 11 &&
      getTime.seconds != 12 &&
      getTime.seconds != 13 &&
      getTime.seconds != 14
    ) {
      nameSeconds.forEach((item) => {
        item.textContent = "Cекунды";
      });
    } else {
      nameSeconds.forEach((item) => {
        item.textContent = "Cекунд";
      });
    }

    let idInterval = setTimeout(updateClock, 1000);

    if (getTime.timeRemaining <= 0) {
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      clearTimeout(idInterval);
    }
  };
  updateClock();
};

export default timer;
