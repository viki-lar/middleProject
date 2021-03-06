import { modal } from "./modal";

const lightbox = () => {
  const body = document.querySelector("body");
  const sertificate = document.querySelectorAll(".sertificate-document");
  const overlay = document.querySelector(".overlay");

  // создание блока
  const createBlock = () => {
    const imageModal = document.createElement("div");
    const close = document.createElement("span");
    const image = document.createElement("img");

    imageModal.classList.add("imageModal");

    imageModal.style.cssText =
      " position: fixed ;top: 50% ;  left: 50%;  transform: translate(-50%, -50%);  z-index: 999";
    imageModal.style.display = "none";
    body.append(imageModal);

    close.classList.add("close");
    close.textContent = "x";
    close.style.cssText =
      " position: absolute;   top: 5px;  right: 5px;  font-size: 36px;  cursor: pointer;z-index: 1000";
    imageModal.append(close);

    image.style.cssText = "overflow: hidden;  height: 80vh;";
    image.src = "images/documents/original/document4.jpg";
    imageModal.append(image);
  };

  createBlock();

  modal(".sertificate-document", ".imageModal", ".overlay", "close");
};
export default lightbox;
