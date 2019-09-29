import { getItems, postItems } from '@/utils/fetch.js';
import { deleteItems } from '../utils/fetch';

export const addUsers = (params = {}) => {
  return postItems('/api/addUsers', params)
}

export const editBlog = (params = {}) => {
  return postItems('/api/blog', params)
}


export const deleteBlog = (params = {}) => {
  return deleteItems('/api/blog', params)
}