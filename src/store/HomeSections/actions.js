import {
  GET_HERO_DATA,
  GET_HERO_DATA_SUCCESS,
  GET_HERO_DATA_FAILURE,
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
