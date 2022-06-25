import DetailsPopupController from './controllers/DetailsPopupController.js';
import InvolvementApiService from './services/InvolvementApiService.js';
import TvMazeApiService from './services/TvMazeApiService.js';
import { getLikes } from './utils/likes-function.js';

const HOME_MAIN_CONTAINER_ID = 'home-main-container';
const INVOLVEMENT_API_APP_ID = 'QniNuI3VUHCKof9OMKmJ';

const main = document.querySelector('.main-page');

const showMovies = async (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const movieDisplay = document.createElement('div');
    const movieCard = document.createElement('div');
    const Img = document.createElement('img');
    const movieRating = document.createElement('div');
    const title = document.createElement('h2');
    const summarydiv = document.createElement('div');
    const summary = document.createElement('div');
    const movieDescript = document.createElement('div');
    const stats = document.createElement('span');
    const like = document.createElement('i');
    const likeCount = document.createElement('p');
    const commentBtn = document.createElement('button');
    movieDisplay.classList.add('movie-content');
    movieCard.classList.add('card-image');
    title.classList.add('movie-title');
    stats.classList.add('stats');
    summary.classList.add('summary');
    summarydiv.classList.add('summarydiv');
    movieDescript.classList.add('movie-descrp');
    Img.setAttribute('src', `${data[i].image.medium}`);
    Img.setAttribute('alt', `affiche of ${data[i].name}`);
    Img.setAttribute('class', 'movie-img');
    like.setAttribute('class', 'fa like-btn fa-heart');
    like.setAttribute('id', `${data[i].id}`);
    like.setAttribute('aria-hidden', 'true');
    movieRating.setAttribute('class', 'movie-ratings');
    title.textContent = `${data[i].name}`;
    likeCount.setAttribute('class', 'rateCounts');
    likeCount.setAttribute('Id', `${data[i].id}`);
    likeCount.textContent = '0';
    stats.append(like);

    movieRating.appendChild(stats);
    movieDescript.append(movieRating);
    commentBtn.classList.add('movie-comment');
    movieRating.appendChild(title);
    commentBtn.setAttribute('movieId', `${data[i].id}`);
    commentBtn.id = `${data[i].id}`;
    movieDescript.appendChild(summarydiv);
    summarydiv.appendChild(summary);
    commentBtn.textContent = 'Details';
    commentBtn.addEventListener('click', async () => {
      const tvMazeApiService = new TvMazeApiService();
      const involvementApiService = new InvolvementApiService(
        INVOLVEMENT_API_APP_ID,
      );

      const cast = await tvMazeApiService.getCastByShowId(data[i].id);
      const comments = await involvementApiService.getCommentsById(data[i].id);
      const detailsPopupController = new DetailsPopupController(
        HOME_MAIN_CONTAINER_ID,
        { ...data[i], comments, cast },
        involvementApiService,
      );
      detailsPopupController.build('root');
    });
    movieDescript.append(commentBtn);
    movieDisplay.append(Img, movieDescript);
    main.appendChild(movieDisplay);
    summary.innerHTML = data[i].summary;

    const updateLikes = async () => {
      const response = await getLikes();
      const counts = document.querySelectorAll('.rateCounts');

      counts.forEach((button) => {
        response.forEach((res) => {
          if (button.id === res.item_id) {
            button.textContent = res.likes;
          }
        });
      });
      stats.append(likeCount);
    };
    updateLikes();
  }
};
export default showMovies;
