import { createHtmlElement } from '../../../../utils/html.utils.js';
import ViewComponent from '../../ViewComponent.js';

export default class CastGridView extends ViewComponent {
  constructor(castItems) {
    super();
    this.castItems = castItems;
  }

  createHtmlElem = () => {
    const castGrid = createHtmlElement({
      tag: 'ul',
      className: 'c-cast__grid',
    });

    // Create and append the cast items to the 'castGrid'
    this.castItems.forEach(({
      actorImgUrl, actorName, characterName, actorBiographyUrl,
    }) => {
      const gridItem = createHtmlElement({
        tag: 'li',
      });

      const castItem = createHtmlElement({
        tag: 'a',
        className: 'c-cast__item',
      });
      castItem.href = actorBiographyUrl;
      castItem.target = '_blank';
      castItem.rel = 'noopener noreferrer';
      castItem.ariaLabel = `See more about ${actorName}`;

      const actorImg = createHtmlElement({
        tag: 'img',
        className: 'c-cast__item-img',
      });
      actorImg.src = actorImgUrl;
      actorImg.alt = `photo of ${actorName}`;

      const castItemContent = createHtmlElement({
        tag: 'div',
        className: 'c-cast__item-content',
      });

      const castItemActorName = createHtmlElement({
        tag: 'h4',
        className: 'c-cast__actor',
        text: actorName,
      });

      const castItemCharacterName = createHtmlElement({
        tag: 'p',
        className: 'c-cast__character',
        text: `as ${characterName}`,
      });

      // Append the 'castItemContent' children
      castItemContent.appendChild(castItemActorName);
      castItemContent.appendChild(castItemCharacterName);

      // Append the 'castItem' children
      castItem.appendChild(actorImg);
      castItem.appendChild(castItemContent);

      // Append the 'gridItem' child
      gridItem.appendChild(castItem);

      // Append the 'castGrid' child
      castGrid.appendChild(gridItem);
    });

    return castGrid;
  }
}
