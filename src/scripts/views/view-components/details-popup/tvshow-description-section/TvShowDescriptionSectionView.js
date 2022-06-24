import { createHtmlElement } from '../../../../utils/html.utils.js';
import ViewComponent from '../../ViewComponent.js';

export default class TvShowDescriptionSectionView extends ViewComponent {
  constructor(tvShowData) {
    super();
    this.tvShowData = tvShowData;
  }

  createHtmlElem = () => {
    const {
      title, tvShowImgUrl, summary, genres,
    } = this.tvShowData;

    const tvShowDescriptionSection = createHtmlElement({
      tag: 'section',
      className: 'c-tvshow-description',
    });

    const tvShowImg = createHtmlElement({
      tag: 'img',
      className: 'c-tvshow-description__img',
    });
    tvShowImg.src = tvShowImgUrl;
    tvShowImg.alt = `${title}`;

    const tvShowDescriptionSectionContent = createHtmlElement({
      tag: 'div',
      className: 'c-tvshow-description__content',
    });

    const tvShowDescriptionText = createHtmlElement({
      tag: 'div',
      className: 'c-tvshow-description__text',
    });
    tvShowDescriptionText.innerHTML = summary;

    const listWithTvShowGenres = createHtmlElement({
      tag: 'ul',
      className: 'l-horizontal-list',
    });
    genres.forEach((genre) => {
      const tvShowGenreListItem = createHtmlElement({
        tag: 'li',
        className: 'c-badge',
        text: genre,
      });
      listWithTvShowGenres.appendChild(tvShowGenreListItem);
    });

    // Append the 'tvShowDescriptionSectionContent' children
    tvShowDescriptionSectionContent.appendChild(tvShowDescriptionText);
    tvShowDescriptionSectionContent.appendChild(listWithTvShowGenres);

    // Append the 'tvShowDescriptionSection' children
    tvShowDescriptionSection.appendChild(tvShowImg);
    tvShowDescriptionSection.appendChild(tvShowDescriptionSectionContent);

    return tvShowDescriptionSection;
  }
}
