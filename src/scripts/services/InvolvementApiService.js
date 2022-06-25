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
    try {
      const response = await this.api.post('apps');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
