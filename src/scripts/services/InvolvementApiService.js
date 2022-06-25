import axios from 'axios';

export default class InvolvementApiService {
  constructor(appId) {
    this.api = axios.create({
      baseURL:
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/',
    });
    this.appId = appId;
  }

  createNewApp = async () => {
    const { data } = await this.api.post('apps');
    return data;
  };

  getCommentsById = async (itemId) => {
    try {
      const { data } = await this.api.get(
        `apps/${this.appId}/comments?item_id=${itemId}`,
      );
      return data;
    } catch (error) {
      return [];
    }
  };

  createNewComment = async (comment, itemId) => {
    await this.api.post(`apps/${this.appId}/comments?item_id=${itemId}`, comment);
  }
}
