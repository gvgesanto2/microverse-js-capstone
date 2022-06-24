import getData from '../services/getdata.js';

const countedMovies = document.querySelector('.series-counter');

const counterFunction = async () => {
  const moviesNumber = await getData();
  const total = moviesNumber.length;
  countedMovies.textContent = `Movie Shows(${total})`;
  return total;
};

counterFunction();