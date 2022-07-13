const validate = () => {
  const userName = document.querySelectorAll("form [name=fio]");

  //достаём forms с атрибутом [type=tel]
  const phone = document.querySelectorAll("form [name=phone]");

  // // проверка модальных окон

  //перевод в верхний регистр первой буквы, а остальные в нижний регистр
  const validSimbols = (str) => {
    //исправляем первый символ
    str = str.replace(/\S+/gi, (word) => {
      word = word.split("");

      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          word[i].toUpperCase();
          word[i] = word[i].toUpperCase();
        } else {
          word[i] = word[i].toLowerCase();
        }
      }
      word = word.join("");
      return word;
    });

    return str;
  };

  //функция проверки двойных и более пробелов в строчке и исправление на один пробел
  const validSpace = (str) => {
    // console.log(event.target.value.match(/(\s\s)+/gi))
    if (/\s\s/gi.test(str)) {
      do {
        str = str.replace(/(\s\s)/gi, (str) => {
          return " ";
        });
      } while (/\s\s/gi.test(str));
      //Дополнительно удалим пробел в начале и в конце строки
      str = str.replace(/^\s/i, "");
      str = str.replace(/\s$/gi, "");
    }
    return str;
  };

  //проверка ввода текста
  userName.forEach((name) => {
    name.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-я a-z]/gi, "");
    });
  });

  //функция вешает на инпуты форм события blur и проверяет правильность ввода [type=text]
  userName.forEach((textInput) => {
    textInput.addEventListener("blur", (event) => {
      //если в тексте встречаются двойные и более пробелы,то менять на один пробел
      event.target.value = validSpace(event.target.value);
      //перевод первого символа в верхнйи регистр, а остальных в нижний
      event.target.value = validSimbols(event.target.value);
    });
  });

  //проверка ввода телефона
  phone.forEach((item) => {
    item.setAttribute("maxlength", "16");
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^+\d]/g, "");
    });
  });
};

export default validate;
