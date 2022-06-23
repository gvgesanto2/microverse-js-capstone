import '../styles/main.scss';

import toggleHamburgerMenu from './hamburguer.js';

const hamburguerBtn = document.getElementById('hamburger-btn');
hamburguerBtn.addEventListener('click', toggleHamburgerMenu);