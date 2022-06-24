import DetailsPopupView from '../views/view-components/details-popup/DetailsPopupView.js';

export default class DetailsPopupController {
  constructor(tvShowData, involvementApiService) {
    this.tvShowData = tvShowData;
    this.involvementApiService = involvementApiService;

    this.detailsPopupView = new DetailsPopupView(tvShowData, {
      handleClosePopup: this.handleClosePopup,
      handleAddComment: this.handleAddComment,
    });
  }

  handleClosePopup = () => {
    this.detailsPopupView.remove();
  }

  handleAddComment = async ({ username, comment }) => {
    await this.involvementApiService.createNewComment({
      item_id: this.tvShowData.id,
      username,
      comment,
    });
    const newComments = await this.involvementApiService.getCommentsById(
      this.tvShowData.id,
    );
    this.detailsPopupView.refreshCommentsList(newComments);
  };

  build = (parentElemId) => {
    this.detailsPopupView.render(parentElemId);
  };
}
