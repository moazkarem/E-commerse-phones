import {
  GET_BLOGS_DATA,
  GET_BLOGS_DATA_SUCCESS,
  GET_BLOGS_DATA_FAILURE,
  GET_SINGLE_BLOG_DATA,
  GET_SINGLE_BLOG_DATA_SUCCESS,
  GET_SINGLE_BLOG_DATA_FAILURE,
} from "./actionTypes";

export const getBlogsData = () => ({
  type: GET_BLOGS_DATA,
});

export const getBlogsDataSuccess = (payload) => ({
  type: GET_BLOGS_DATA_SUCCESS,
  payload,
});

export const getBlogsDataFailure = (error) => ({
  type: GET_BLOGS_DATA_FAILURE,
  error,
});

//============== SINGLE BLOG

export const getSingleBlog = (id) => ({
  type: GET_SINGLE_BLOG_DATA,
  payload: id,
});

export const getSingleBlogSuccess = (payload) => ({
  type: GET_SINGLE_BLOG_DATA_SUCCESS,
  payload,
});

export const getSingleBlogFailure = (error) => ({
  type: GET_SINGLE_BLOG_DATA_FAILURE,
  error,
});
