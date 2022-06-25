import CommentsSectionView from './comments-section/CommentsSectionView.js';
import TvShowCastSectionView from './cast-section/TvShowCastSectionView.js';
import TvShowDescriptionSectionView from './description-section/TvShowDescriptionSectionView.js';
import ViewComponent from '../ViewComponent.js';
import { createHtmlElement } from '../../../utils/html.utils.js';

export default class DetailsPopupView extends ViewComponent {
  constructor(tvShowData, eventHandlersObj) {
    super();
    this.tvShowData = tvShowData;
    this.eventHandlersObj = eventHandlersObj;
    this.commentsSectionView = null;
  }

  createHtmlElem = () => {
    const {
      id, title, premieredDate, status, rating, comments,
    } = this.tvShowData;

    const popupContainer = createHtmlElement({
      tag: 'div',
      className: 'l-popup',
    });

    const popupWindow = createHtmlElement({
      tag: 'article',
      className: 'l-popup__window c-details-window',
    });

    const popupHeader = createHtmlElement({
      tag: 'header',
      className: 'c-details-window__header',
    });

    const popupHeaderToolbar = createHtmlElement({
      tag: 'div',
      className: 'c-details-window__toolbar',
    });

    const popupTitle = createHtmlElement({
      tag: 'h2',
      className: 'c-details-window__title',
      text: title,
    });

    const popupCloseBtn = createHtmlElement({
      tag: 'button',
      className: 'c-icon-btn',
    });
    popupCloseBtn.type = 'button';
    popupCloseBtn.innerHTML = `
      <svg class="c-icon--md">
        <use xlink:href="#sprite_cancel"></use>
      </svg>
    `;
    popupCloseBtn.addEventListener('click', this.eventHandlersObj.handleClosePopup);

    const bulletListWithTvShowInfos = createHtmlElement({
      tag: 'ul',
      className: 'c-bullet-list',
    });
    const premieredDateListItem = createHtmlElement({
      tag: 'li',
      text: premieredDate,
    });
    const statusListItem = createHtmlElement({
      tag: 'li',
      text: status,
    });
    const ratingListItem = createHtmlElement({
      tag: 'li',
      className: 'c-details-window__rating',
    });
    ratingListItem.innerHTML = `
      <span>${rating}</span><span>/10</span>
    `;

    const popupContent = createHtmlElement({
      tag: 'div',
      className: 'c-details-window__content',
    });

    // Append the 'bulletListWithTvShowInfos' children
    bulletListWithTvShowInfos.appendChild(premieredDateListItem);
    bulletListWithTvShowInfos.appendChild(statusListItem);
    bulletListWithTvShowInfos.appendChild(ratingListItem);

    // Append the 'popupHeaderToolbar' children
    popupHeaderToolbar.appendChild(popupTitle);
    popupHeaderToolbar.appendChild(popupCloseBtn);

    // Append the 'popupHeader' children
    popupHeader.appendChild(popupHeaderToolbar);
    popupHeader.appendChild(bulletListWithTvShowInfos);

    // Append the 'popupContent' children
    const tvShowDescriptionSectionView = new TvShowDescriptionSectionView(this.tvShowData);
    tvShowDescriptionSectionView.appendToParent(popupContent);
    const tvShowCastSectionView = new TvShowCastSectionView(this.tvShowData, this.eventHandlersObj);
    tvShowCastSectionView.appendToParent(popupContent);
    this.commentsSectionView = new CommentsSectionView(id, comments, this.eventHandlersObj);
    this.commentsSectionView.appendToParent(popupContent);

    // Append the 'popupWindow' children
    popupWindow.appendChild(popupHeader);
    popupWindow.appendChild(popupContent);

    // Append the 'popupContainer' child
    popupContainer.appendChild(popupWindow);

    return popupContainer;
  };

  refreshCommentsList = (newComments) => {
    this.commentsSectionView?.refreshCommentsList(newComments);
  }
}
