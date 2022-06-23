import DetailsPopupView from './views/view-components/DetailsPopupView.js';
import '../assets/images/sprite.svg';
import '../styles/main.scss';

const tvShowExampleData = {
  title: 'Under the Dome',
  premieredYear: 2011,
  status: 'Ended',
  rating: 8.8,
};
const eventHandlersObj = {
  handleClosePopup: () => { console.log('close popup'); },
};

const detailsPopupView = new DetailsPopupView(tvShowExampleData, eventHandlersObj);
detailsPopupView.render('root');
