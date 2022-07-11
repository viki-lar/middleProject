const timer = (deadline) => {
  //получение элементов со страницы
  const timerDays = document.querySelector("#timer-days");
  const timerHours = document.querySelector("#timer-hours");
  const timerMinutes = document.querySelector("#timer-minutes");
  const timerSeconds = document.querySelector("#timer-seconds");

  const getTimeRemaining = function () {
    //получаем точки времени в миллисекундах
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();

    // получаем оставшееся время в секундах

    let timeRemaining = (dateStop - dateNow) / 1000;

    // получаем часы, минуты,секунды
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
      if (arg < 10) {
        return "0" + arg;
      } else {
        return arg;
      }
    };
    timerDays.textContent = changeTime(getTime.days);
    timerHours.textContent = changeTime(getTime.hours);
    timerMinutes.textContent = changeTime(getTime.minutes);
    timerSeconds.textContent = changeTime(getTime.seconds);

    let idInterval = setInterval(updateClock, 1000);

    if (getTime.timeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      clearInterval(idInterval);
    }
  };
  updateClock();
};

export default timer;
