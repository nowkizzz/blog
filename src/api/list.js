import { getItems, postItems } from '@/utils/fetch.js';

export const getBlogList = (params = {}) => {
  return getItems('/api/blogs', params)
}

export const getList = (params = {}) => {
  return getItems('/api/blogs', params)
}