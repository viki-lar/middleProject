import { animate } from "./helpers";

const calc = (price) => {
  const calcBlock = document.querySelector("#calc");
  const calcType = document.querySelector("#calc-type");
  const calcTypeMaterial = document.querySelector("#calc-type-material");
  const calcSquare = document.querySelector("#calc-input");
  const total = document.querySelector("#calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    let calcSquareValue = 1;
    let totalValue = 0;
    let calcTypeMaterialValue;

    //определение значений по умолчанию
    if (calcTypeMaterial.value > 0) {
      calcTypeMaterialValue =
        +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    } else {
      calcTypeMaterialValue = 1;
    }

    calcSquareValue = calcSquare.value;

    // рассчет при обязательных полях
    if (calcTypeValue && calcSquareValue) {
      totalValue =
        price * calcSquareValue * calcTypeValue * calcTypeMaterialValue;

      // анимация

      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.value = Math.trunc(
            (totalValue * Math.trunc(progress * 10)) / 10
          );
        },
      });
    } else {
      totalValue = 0;
    }

    //вывод итога
    total.value = totalValue;
  };

  //запуск калькулятора
  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcTypeMaterial
    ) {
      countCalc();
    }
  });
};

export default calc;
