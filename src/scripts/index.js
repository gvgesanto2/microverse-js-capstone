import '../assets/images/sprite.svg';
import '../styles/main.scss';
import InvolvementApiService from './services/InvolvementApiService.js';
import DetailsPopupController from './controllers/DetailsPopupController.js';
import './utils/seriesCounter.js';
import getData from './services/getdata.js';
import showMovies from './showMovies';
import toggleHamburgerMenu from './hamburguer.js';

const INVOLVEMENT_API_APP_ID = 'QniNuI3VUHCKof9OMKmJ';
const testingId = 'testingId$8999';

const tvShowExampleData = {
  title: 'Under the Dome',
  premieredYear: 2011,
  status: 'Ended',
  rating: 8.8,
  tvShowImgUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg',
  summary: `
    You are being watched. The government has a secret system, a machine
    that spies on you every hour of every day. I know because I built it.
    I designed the Machine to detect acts of terror but it sees
    everything. Violent crimes involving ordinary people. People like you.
    Crimes the government considered "irrelevant". They wouldn't act so I
    decided I would. But I needed a partner. Someone with the skills to
    intervene. Hunted by the authorities, we work in secret. You'll never
    find us. But victim or perpetrator, if your number is up, we'll find
    you.
  `,
  genres: ['Action', 'Crime', 'Science-Fiction'],
  cast: [
    {
      actorImgUrl:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/3.jpg',
      actorName: 'Mike Vogel',
      characterName: 'Dale',
      actorBiographyUrl: 'https://www.tvmaze.com/people/1/mike-vogel',
    },
    {
      actorImgUrl:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/6.jpg',
      actorName: 'Mike Verde Vogel',
      characterName: 'Dale "Barbie" Barbara',
      actorBiographyUrl: 'https://www.tvmaze.com/people/2/rachelle-lefevre',
    },
    {
      actorImgUrl:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/7.jpg',
      actorName: 'Mike Garcia Vogel Espirito Santo',
      characterName: 'Dale "Barbie" Barbara',
      actorBiographyUrl: 'https://www.tvmaze.com/people/3/alexander-koch',
    },
  ],
};

const involvementApiService = new InvolvementApiService(INVOLVEMENT_API_APP_ID);
involvementApiService.getCommentsById(testingId).then((comments) => {
  const detailsPopupController = new DetailsPopupController(
    { ...tvShowExampleData, comments },
    involvementApiService,
  );
  detailsPopupController.build('root');
});

document.addEventListener('DOMContentLoaded', showMovies);

const displayItem = async () => {
  const movies = await getData();
  showMovies(movies);
};
displayItem();

const hamburguerBtn = document.getElementById('hamburger-btn');
hamburguerBtn.addEventListener('click', toggleHamburgerMenu);
