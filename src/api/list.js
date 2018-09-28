import {getItems, postItems} from '@/utils/fetch.js';

export const getList = (params = {}) => {
  return getItems('/api/getBlogList', params)
}