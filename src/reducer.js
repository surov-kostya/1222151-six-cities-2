import {cities} from './mocks/offers';

const initialState = {
  city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
  places: cities[0].places
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_ORDER_LIST`
};

export const ActionCreator = {
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
      payload: places
    };
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFER_LIST:
      return Object.assign({}, state, {places: action.payload});
    default:
      return state;
  }
};
