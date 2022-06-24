import addHidingFeatureToView from '../../../decorators/hiding-feature.decorator.js';
import CastGridView from './CastGridView.js';
import ViewComponent from '../../ViewComponent.js';
import { createHtmlElement } from '../../../../utils/html.utils.js';

export default class TvShowCastSectionView extends ViewComponent {
  constructor(tvShowData, eventHandlersObj) {
    super();
    this.tvShowData = tvShowData;
    this.eventHandlersObj = eventHandlersObj;
    this.isCastHidden = true;
  }

  handleToggleCastGrid = (castGridView, dropdownButton) => {
    if (this.isCastHidden) {
      castGridView.show();
      dropdownButton.style.transform = 'rotate(90deg)';
      this.isCastHidden = false;
    } else {
      castGridView.hide();
      dropdownButton.style.transform = 'rotate(0)';
      this.isCastHidden = true;
    }
  }

  createHtmlElem = () => {
    const { cast } = this.tvShowData;

    const tvShowCastSection = createHtmlElement({
      tag: 'section',
      className: 'c-cast',
    });

    const tvShowCastSectionHeader = createHtmlElement({
      tag: 'header',
      className: 'c-cast__header',
    });

    const tvShowCastSectionTitle = createHtmlElement({
      tag: 'h3',
      className: 'c-cast__title',
      text: 'Cast',
    });

    const castGridView = new CastGridView(cast);
    addHidingFeatureToView(castGridView);

    const dropdownButton = createHtmlElement({
      tag: 'button',
      className: 'c-icon-btn',
    });
    dropdownButton.type = 'button';
    dropdownButton.innerHTML = `
      <svg class="c-icon--md">
        <use xlink:href="#sprite_chevron-right"></use>
      </svg>
    `;
    dropdownButton.addEventListener(
      'click',
      () => {
        this.handleToggleCastGrid(castGridView, dropdownButton);
      },
    );

    // Append the 'tvShowCastSectionHeader' children
    tvShowCastSectionHeader.appendChild(tvShowCastSectionTitle);
    tvShowCastSectionHeader.appendChild(dropdownButton);

    // Append the 'tvShowCastSection' children
    tvShowCastSection.appendChild(tvShowCastSectionHeader);
    castGridView.appendToParent(tvShowCastSection);
    castGridView.hide();

    return tvShowCastSection;
  };
}
