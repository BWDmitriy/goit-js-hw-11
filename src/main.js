import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages
} from './js/pixabay-api.js';
import {
  renderImages
} from './js/render-functions.js';

export const galleryList = document.querySelector('ul.gallery');
export let query = '';
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