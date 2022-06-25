import DetailsPopupView from '../views/view-components/details-popup/DetailsPopupView.js';
import MainContainerViewManager from '../views/view-managers/MainContainerViewManager.js';

export default class DetailsPopupController {
  constructor(mainContainerId, rawShowData, involvementApiService) {
    this.tvShowData = this.parseRawShowData(rawShowData);
    this.involvementApiService = involvementApiService;

    this.detailsPopupView = new DetailsPopupView(this.tvShowData, {
      handleClosePopup: this.handleClosePopup,
      handleAddComment: this.handleAddComment,
    });

    this.mainContainerViewManager = new MainContainerViewManager(
      mainContainerId,
    );
  }

  handleClosePopup = () => {
    this.mainContainerViewManager.unblur();
    this.detailsPopupView.remove();
  };

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
    this.mainContainerViewManager.blur();
    this.detailsPopupView.render(parentElemId);
  };

  parseRawShowData = ({
    id,
    name,
    genres,
    premiered,
    status,
    summary,
    rating,
    comments,
    image,
    cast,
  }) => ({
    id,
    title: name,
    premieredDate: premiered,
    status,
    rating: rating.average,
    tvShowImgUrl: image.original,
    summary,
    genres,
    comments,
    cast: this.parseRawCastData(cast),
  });

  parseRawCastData = (rawCastData) => rawCastData.map(({ character, person }) => ({
    actorImgUrl: character.image?.medium || person.image?.medium,
    actorName: person.name,
    characterName: character.name,
    actorBiographyUrl: person.url,
  }));
}
