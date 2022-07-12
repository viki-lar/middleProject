const scroll = () => {
  const scrollBtn = document.querySelectorAll(".smooth-scroll");

  //скрываем кнопку
  scrollBtn.forEach((link) => {
    link.style.display = "none";
  });

  //при скролле кнопка появляется
  const magic = () => {
    if (window.pageYOffset > 200) {
      scrollBtn.forEach((link) => {
        link.style.display = "block";
      });
    } else {
      scrollBtn.forEach((link) => {
        link.style.display = "none";
      });
    }
  };
  //плавный скролл
  scrollBtn.forEach((link) => {
    link.addEventListener("click", (event) => {
      // прерывание стандартного действия при клике на ссылку
      event.preventDefault();
      // получаем id для секции

      const section = document.getElementById("navigation");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    });
  });
  window.onscroll = magic;
};
export default scroll;
