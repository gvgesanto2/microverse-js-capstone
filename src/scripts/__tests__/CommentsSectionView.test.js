import CommentsSectionView from '../views/view-components/details-popup/comments-section/CommentsSectionView.js';

const BASE_COMMENTS_COUNT_TEXT = 'Comments';
let commentsSectionView;

describe('CommentsSection.genCommentsCountText() Method', () => {
  beforeEach(() => {
    commentsSectionView = new CommentsSectionView('some_id', [], {});
  });

  it('should be able to display the right number of comments', () => {
    const commentsList = [
      { item_id: 1, username: 'user 1', comment: 'comment 1' },
      { item_id: 2, username: 'user 2', comment: 'comment 2' },
      { item_id: 3, username: 'user 3', comment: 'comment 3' },
    ];
    const commentsCountText = commentsSectionView.genCommentsCountText(commentsList);

    expect(commentsCountText).toBe(`${commentsList.length} ${BASE_COMMENTS_COUNT_TEXT}`);
  });

  it('should be able to display a message when there are NO comments', () => {
    const commentsList = [];
    const commentsCountText = commentsSectionView.genCommentsCountText(commentsList);

    expect(commentsCountText).toBe('No Comments');
  });
});
