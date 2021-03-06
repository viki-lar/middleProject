import modal from "./modules/modal";
import timer from "./modules/timer";
import calc from "./modules/calc";
import slider from "./modules/slider";
import scroll from "./modules/scroll";
import validate from "./modules/validate";
import sendForm from "./modules/sendForm";
import swiper from "./modules/swiper";
import lightbox from "./modules/lightbox";
import comments from "./modules/comments";

modal(".header-btn", ".header-modal", ".overlay", "header-modal__close");
modal(
  ".service-button",
  ".services-modal",
  ".overlay",
  "services-modal__close"
);

timer("18 july 2022");
slider();
calc(1000);
scroll(1000);
validate();
swiper();
lightbox();
// comments();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "input",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form4",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form5",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form6",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
sendForm({
  formId: "form7",
  someElem: [
    {
      type: "input",
      id: "calc-total",
    },
  ],
});
