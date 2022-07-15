const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка ...";
  const successText = "Спасибо! Заявка отправлена";

  // // // валидация
  const validateForm = (list) => {
    let success = true;
    const formElements = form.querySelectorAll("input");

    formElements.forEach((input) => {
      if (!input.value) {
        success = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "";
      }

      // отключение стиля ошибки при фокуссировке
      input.addEventListener("focus", () => {
        const formElements = form.querySelectorAll("input");
        formElements.forEach((input) => {
          input.style.border = "";
        });
      });
    });
    return success;
  };

  // создание post запроса

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    // создание объекта из  данных введеднных в форму
    const formData = new FormData(form);
    const formBody = {};
    const formElements = form.querySelectorAll("input");

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    // // // добавление данных в объект

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      // если элемент существует, то добавится в форму
      if (element) {
        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        }
      }
    });

    // проверка на валидация форм
    if (validateForm(form)) {
      // вывод сообщения о загрузке данных

      statusBlock.textContent = loadText;

      form.append(statusBlock);
      // отправка данных
      sendData(formBody)
        .then((data) => {
          // вывод сообщения об успешной отправке
          statusBlock.textContent = successText;
          // очистка полей ввода
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        //вывод ошибки
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      // alert("Данные не отправлены");
    }
  };

  try {
    if (!form) {
      throw new Error("верните форму!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
