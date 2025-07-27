import {
  GET_HERO_DATA,
  GET_HERO_DATA_SUCCESS,
  GET_HERO_DATA_FAILURE,
} from "./actionTypes";

const initialState = {
  heroData: [],
  loading: false,
  error: null,
};

const homeSections = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO_DATA:
      return { ...state, loading: true, error: null };
    case GET_HERO_DATA_SUCCESS:
      return { ...state, heroData: action.payload, loading: false };
    case GET_HERO_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default homeSections;
