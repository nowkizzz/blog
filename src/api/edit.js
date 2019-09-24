import {getItems, postItems} from '@/utils/fetch.js';

export const addUsers = (params = {}) => {
  return postItems('/api/addUsers', params)
}