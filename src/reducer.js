import {cities} from './mocks/offers';
import {variations} from './mocks/sort-variations';

const initialState = {
  city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
  places: cities[0].places,
  mainSortVariant: variations[0]
};

export const ActionType = {
  SORT_MAIN: `SORT_MAIN`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_ORDER_LIST`
};

export const ActionCreator = {
  sortMain: (variantId) => {
    const variant = variations.find((item) => item.id === variantId);
    return {
      type: ActionType.SORT_MAIN,
      payload: variant || initialState.mainSortVariant
    };
  },

  chooseCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  fetchOfferList: (chosenCityId) => {
    const places = cities.find((city) =>
      city.id === chosenCityId
    ).places;
    return {
      type: ActionType.GET_OFFER_LIST,
      payload: places || initialState.places
    };
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_MAIN:
      return Object.assign({}, state, {mainSortVariant: action.payload});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFER_LIST:
      return Object.assign({}, state, {places: action.payload});
    default:
      return state;
  }
};
