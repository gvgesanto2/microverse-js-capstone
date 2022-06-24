import { createHtmlElement } from '../../../../utils/html.utils.js';
import AddCommentFormView from './AddCommentFormView.js';
import CommentsListView from './CommentsListView.js';
import ViewComponent from '../../ViewComponent.js';

const NUM_COMMENTS_TO_SHOW_BY_DEFAULT = 3;

export default class CommentsSectionView extends ViewComponent {
  constructor(initialComments, eventHandlersObj) {
    super();
    this.initialComments = initialComments;
    this.eventHandlersObj = eventHandlersObj;
    this.commentsListView = null;
    this.toggleCommentsBtn = null;
    this.commentsCount = null;
    this.areThereCommentsHidden = false;
  }

  #genCommentsCountText = (comments) => (comments.length === 0 ? 'No Comments' : `${comments.length} Comments`);

  createHtmlElem = () => {
    const commentsSections = createHtmlElement({
      tag: 'section',
      className: 'c-comments',
    });

    const commentsSectionsHeader = createHtmlElement({
      tag: 'header',
      className: 'c-comments__header',
    });

    const commentsCount = createHtmlElement({
      tag: 'h3',
      className: 'c-comments__title',
      text: this.#genCommentsCountText(this.initialComments),
    });
    this.commentsCount = commentsCount;

    // Append the 'commentsSectionsHeader' children
    commentsSectionsHeader.appendChild(commentsCount);
    const addCommentFormView = new AddCommentFormView(
      this.eventHandlersObj.handleAddComment,
    );
    addCommentFormView.appendToParent(commentsSectionsHeader);

    // Append the 'commentsSections' children
    commentsSections.appendChild(commentsSectionsHeader);
    this.commentsListView = new CommentsListView(
      this.initialComments,
      NUM_COMMENTS_TO_SHOW_BY_DEFAULT,
    );
    this.commentsListView.appendToParent(commentsSections);

    if (this.initialComments.length > NUM_COMMENTS_TO_SHOW_BY_DEFAULT) {
      this.toggleCommentsBtn = this.#createToggleCommentsBtnElem();
      commentsSections.appendChild(this.toggleCommentsBtn);
      this.areThereCommentsHidden = true;
    }

    return commentsSections;
  };

  #createToggleCommentsBtnElem = () => {
    const toggleCommentsBtn = createHtmlElement({
      tag: 'button',
      className: 'c-btn c-btn--primary c-btn--full',
      text: 'show more',
    });
    toggleCommentsBtn.type = 'button';
    toggleCommentsBtn.addEventListener('click', () => {
      this.handleToggleComments(toggleCommentsBtn);
    });
    return toggleCommentsBtn;
  };

  handleToggleComments = (toggleCommentsBtnElem) => {
    if (this.areThereCommentsHidden) {
      this.commentsListView.showAllHiddenComments();
      toggleCommentsBtnElem.innerHTML = 'show less';
      this.areThereCommentsHidden = false;
    } else {
      this.commentsListView.hideCommentsHiddenByDefault();
      toggleCommentsBtnElem.innerHTML = 'show more';
      this.areThereCommentsHidden = true;
    }
  };

  refreshCommentsList = (newComments) => {
    this.commentsListView?.remove();
    this.toggleCommentsBtn?.remove();
    this.commentsListView = new CommentsListView(
      newComments,
      NUM_COMMENTS_TO_SHOW_BY_DEFAULT,
    );
    this.commentsListView.appendToParent(this.htmlElem);
    this.commentsCount.innerHTML = this.#genCommentsCountText(newComments);

    if (newComments.length > NUM_COMMENTS_TO_SHOW_BY_DEFAULT) {
      this.toggleCommentsBtn = this.#createToggleCommentsBtnElem();
      this.htmlElem.appendChild(this.toggleCommentsBtn);
    }
  };
}
