import modal from "./modules/modal";
import timer from "./modules/timer";
import calc from "./modules/calc";
import slider from "./modules/slider";

modal(".header-btn", ".header-modal", ".overlay", "header-modal__close");
modal(
  ".service-button",
  ".services-modal",
  ".overlay",
  "services-modal__close"
);
timer("17 july 2022");
slider();
calc(1000);
