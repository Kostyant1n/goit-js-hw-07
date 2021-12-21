import { galleryItems } from "./gallery-items.js";

const refs = {
  galleryImage: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a 
  class="gallery__link"
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
refs.galleryImage.insertAdjacentHTML("afterbegin", galleryMarkup);

let instance = null;
refs.galleryImage.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const dataSource = e.target.dataset.source;

  document.addEventListener("keydown", closeModalEscape);

  instance = basicLightbox.create(`
    <img src="${dataSource}" width="800" height="600">
`);

  instance.show();
}

function closeModalEscape(e) {
  if (e.code === "Escape") instance.close();

  document.removeEventListener("keydown", closeModalEscape);
}
