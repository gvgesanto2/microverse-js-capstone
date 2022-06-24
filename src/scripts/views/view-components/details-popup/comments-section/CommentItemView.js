/* eslint-disable camelcase */
import { createHtmlElement } from '../../../../utils/html.utils.js';
import ViewComponent from '../../ViewComponent.js';

export default class CommentItemView extends ViewComponent {
  constructor(commentData) {
    super();
    this.commentData = commentData;
  }

  createHtmlElem = () => {
    const {
      username, comment, creation_date,
    } = this.commentData;

    const commentListItem = createHtmlElement({
      tag: 'li',
      className: 'c-comment',
    });

    const commentHeader = createHtmlElement({
      tag: 'header',
      className: 'c-comment__header',
    });

    const commentOwner = createHtmlElement({
      tag: 'h4',
      className: 'c-comment__owner',
      text: username,
    });

    const commentDate = createHtmlElement({
      tag: 'span',
      className: 'c-comment__date',
      text: creation_date,
    });

    const commentText = createHtmlElement({
      tag: 'p',
      className: 'c-comment__text',
      text: comment,
    });

    // Append the 'commentHeader' children
    commentHeader.appendChild(commentOwner);
    commentHeader.appendChild(commentDate);

    // Append the 'commentListItem' children
    commentListItem.appendChild(commentHeader);
    commentListItem.appendChild(commentText);

    return commentListItem;
  }
}
