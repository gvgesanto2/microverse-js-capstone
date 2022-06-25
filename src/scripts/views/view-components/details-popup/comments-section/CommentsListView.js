import { createHtmlElement } from '../../../../utils/html.utils.js';
import addHidingFeatureToView from '../../../decorators/hiding-feature.decorator.js';
import CommentItemView from './CommentItemView.js';
import ViewComponent from '../../ViewComponent.js';

export default class CommentsListView extends ViewComponent {
  constructor(
    comments,
    numCommentsToShowByDefault,
    isAllCommentsShowedOnMount = false,
  ) {
    super();
    this.comments = comments;
    this.commentItemViews = [];
    this.numCommentsToShowByDefault = numCommentsToShowByDefault;
    this.isAllCommentsShowedOnMount = isAllCommentsShowedOnMount;
  }

  createHtmlElem = () => {
    const commentsList = createHtmlElement({
      tag: 'ul',
      className: 'c-comments__list',
    });

    this.comments.forEach((comment, index) => {
      const commentItemView = new CommentItemView(comment);
      commentItemView.appendToParent(commentsList);

      addHidingFeatureToView(commentItemView);
      if (
        index >= this.numCommentsToShowByDefault
        && !this.isAllCommentsShowedOnMount
      ) {
        commentItemView.hide();
      }

      this.commentItemViews.push(commentItemView);
    });

    return commentsList;
  };

  showAllHiddenComments = () => {
    this.commentItemViews
      .slice(this.numCommentsToShowByDefault)
      .forEach((commentItemView) => {
        commentItemView.show();
      });
  };

  hideCommentsHiddenByDefault = () => {
    this.commentItemViews
      .slice(this.numCommentsToShowByDefault)
      .forEach((commentItemView) => {
        commentItemView.hide();
      });
  };
}
