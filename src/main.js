import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages
} from './js/pixabay-api';
import {
  renderImages
} from './js/render-functions';

export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');
inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();
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
          message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше`,
          position: 'topRight',
        });
      });
  }
});