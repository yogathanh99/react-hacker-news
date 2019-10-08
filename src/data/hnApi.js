import axios from 'axios';

import { selectFields } from '../utils';

export const baseUrl = ` https://hacker-news.firebaseio.com/v0`;
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const storyUrl = `${baseUrl}/item/`;

export const getStory = async storyId => {
  const res = await axios.get(`${storyUrl + storyId}.json`);
  return selectFields(res.data);
};

export const getStoryIds = async () => {
  const res = await axios.get(newStoriesUrl);
  return res.data;
};
