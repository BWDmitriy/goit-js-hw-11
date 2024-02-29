import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryList = document.querySelector('ul.gallery');
let query = '';
const inputQuery = document.getElementById('search-input');
inputQuery.addEventListener('input', e => {
  query = inputQuery.value;
});
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  if (query) {
    fetchImages()
      .then(data => renderImages(data))
      .catch(error => {
        console.log(error);
        iziToast.error({
          title: 'Error',
          message: `Error: ${error}`,
          position: 'topRight',
        });
      });
  }
});

function fetchImages() {
  // galleryList.innerHTML = `<p class="loading-msg">Loading images, please wait...</p>`;
  galleryList.innerHTML = `<div class="loader"></div>`;
  return fetch(
    `https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderImages(data) {
  galleryList.innerHTML = '';
  console.log(data);
  const images = data.hits;
  if (images.length == 0) {
    iziToast.error({
      title: 'Error',
      message: `Error: No such pictures!`,
      position: 'topRight',
    });
  }
  const galleryMarkup = images
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  // Initialize SimpleLightbox
  const galleryCfg = {
    captionsData: 'alt',
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}