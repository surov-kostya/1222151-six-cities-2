// import {cities} from './mocks/offers';
import {variations} from './mocks/sort-variations';

const initialState = {
  city: {id: -1, name: `temp`, coords: []},
  cities: [],
  places: [],
  mainSortVariant: variations[0]
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  SORT_MAIN: `SORT_MAIN`,
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_ORDER_LIST`,
  GET_CITY_LIST: `GET_CITY_LIST`,
  SERVER_ERROR: `SERVER_ERROR`
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

  fetchOfferList: (places) => {
    return {
      type: ActionType.GET_OFFER_LIST,
      payload: places || initialState.places
    };
  },

  fetchCityList: (cities) => {
    return {
      type: ActionType.GET_CITY_LIST,
      payload: cities
    };
  }
};

const offerBuilder = (item) => ({
  id: item.id,
  name: item.title,
  imageSrc: item.preview_image,
  gallerySrcs: item.images,
  mark: item.is_premium ? `Premium` : ``,
  rating: item.rating,
  parametrs: {
    place: `Entire`,
    bedrooms: item.bedrooms,
    adults: item.max_adults
  },
  price: item.price,
  features: item.goods,
  host: {
    id: item.host.id,
    name: item.host.name,
    status: item.host.is_pro ? `Pro` : ``,
    avatarSrc: item.host.avatar_url
  },
  coords: [item.location.latitude, item.location.longitude]
});

export const Operation = {
  fetchOfferList: (cityName) => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const cityOffers = response.data.filter((place) => place.city.name === cityName).map(offerBuilder);

          dispatch(ActionCreator.fetchOfferList(cityOffers));
        }
      });
  },

  fetchCityList: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const cities = response.data.reduce((accumulator, offer) => {
            if (accumulator.findIndex((item) => item.city.name === offer.city.name) === -1) {
              return [...accumulator, offer];
            }
            return accumulator;
          }, []).map((offer, i) => ({
            id: i,
            name: offer.city.name,
            coords: [offer.city.location.latitude, offer.city.location.longitude]
          }));

          dispatch(ActionCreator.fetchCityList(cities));
          dispatch(ActionCreator.chooseCity(cities[0]));

          const defCityPlaces = response.data.filter((place) => place.city.name === cities[0].name).map(offerBuilder);

          dispatch(ActionCreator.fetchOfferList(defCityPlaces));
        }
      });
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
    case ActionType.GET_CITY_LIST:
      return Object.assign({}, state, {cities: action.payload});
    default:
      return state;
  }
};
