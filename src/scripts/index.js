import '../styles/main.scss';
import getData from './getdata';
import showMovies from './showMovies';
import toggleHamburgerMenu from './hamburguer.js';
document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();

const hamburguerBtn = document.getElementById('hamburger-btn');
hamburguerBtn.addEventListener('click', toggleHamburgerMenu);