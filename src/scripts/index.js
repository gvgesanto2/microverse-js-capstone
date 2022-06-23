import DetailsPopupView from './views/view-components/DetailsPopupView.js';
import '../assets/images/sprite.svg';
import '../styles/main.scss';

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
};
const eventHandlersObj = {
  handleClosePopup: () => { console.log('close popup'); },
};

const detailsPopupView = new DetailsPopupView(tvShowExampleData, eventHandlersObj);
detailsPopupView.render('root');
