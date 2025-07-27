import {
  GET_HERO_DATA,
  GET_HERO_DATA_SUCCESS,
  GET_HERO_DATA_FAILURE,
  GET_ABOUT_DATA,
  GET_ABOUT_DATA_SUCCESS,
  GET_ABOUT_DATA_FAILURE,
} from "./actionTypes";

export const getHeroData = () => ({
  type: GET_HERO_DATA,
});

export const getHeroDataSuccess = (payload) => ({
  type: GET_HERO_DATA_SUCCESS,
  payload,
});

export const getHeroDataFailure = (error) => ({
  type: GET_HERO_DATA_FAILURE,
  error,
});

//======== about page data

export const getAboutPageData = () => ({
  type: GET_ABOUT_DATA,
});

export const getAboutPageDataSuccess = (payload) => ({
  type: GET_ABOUT_DATA_SUCCESS,
  payload,
});

export const getAboutPageDataFailure = (error) => ({
  type: GET_ABOUT_DATA_FAILURE,
  error,
});
