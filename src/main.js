import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');
// Покращення №1: Додано обробку пробілів та очищення галереї при новому пошуку
inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();
  // Очистка галереї перед новим пошуком
  galleryList.innerHTML = '';
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
  if (query) {
    // Покращення №2: Додано логіку відображення індикатора завантаження
    galleryList.innerHTML = '<div class="loader"></div>';
    fetchImages(query)
      .then(data => renderImages(data))
      .catch(error => {
        console.log(error);
        // Покращення №3: Змінено повідомлення про помилку на користувача-орієнтоване
        iziToast.error({
          title: 'Error',
          message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
          position: 'topRight',
        });
      });
  }
});
