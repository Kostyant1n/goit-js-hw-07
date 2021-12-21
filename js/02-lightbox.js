import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryImage: document.querySelector(".gallery"),
};

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li>
  <a 
  class="gallery__item"
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </li>
`;
  })
  .join("");
refs.galleryImage.insertAdjacentHTML("afterbegin", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});