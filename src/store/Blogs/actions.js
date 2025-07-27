import {
  GET_BLOGS_DATA,
  GET_BLOGS_DATA_SUCCESS,
  GET_BLOGS_DATA_FAILURE,
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
