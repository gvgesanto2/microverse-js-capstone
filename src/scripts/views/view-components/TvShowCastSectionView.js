import { createHtmlElement } from '../../utils/html.utils.js';
import CastGridView from './CastGridView.js';
import ViewComponent from './ViewComponent.js';

export default class TvShowCastSectionView extends ViewComponent {
  constructor(tvShowData, eventHandlersObj) {
    super();
    this.tvShowData = tvShowData;
    this.eventHandlersObj = eventHandlersObj;
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
      this.eventHandlersObj.handleToggleDropdown,
    );

    // Append the 'tvShowCastSectionHeader' children
    tvShowCastSectionHeader.appendChild(tvShowCastSectionTitle);
    tvShowCastSectionHeader.appendChild(dropdownButton);

    // Append the 'tvShowCastSection' children
    tvShowCastSection.appendChild(tvShowCastSectionHeader);
    this.castGridView = new CastGridView(cast);
    this.castGridView.appendToParent(tvShowCastSection);

    return tvShowCastSection;
  };
}
