import '../assets/images/sprite.svg';
import '../styles/main.scss';
import './utils/seriesCounter.js';
import getData from './services/getdata.js';
import showMovies from './showMovies.js';
import toggleHamburgerMenu from './hamburguer.js';

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();

const hamburguerBtn = document.getElementById('hamburger-btn');
hamburguerBtn.addEventListener('click', toggleHamburgerMenu);
