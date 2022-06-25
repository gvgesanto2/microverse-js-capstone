import axios from 'axios';

export default class TvMazeApiService {
  constructor() {
    this.api = axios.create({
      baseURL:
        'https://api.tvmaze.com/',
    });
  }

  getCastByShowId = async (showId) => {
    try {
      const { data } = await this.api.get(
        `shows/${showId}/cast`,
      );
      return data;
    } catch (error) {
      return [];
    }
  };
}
