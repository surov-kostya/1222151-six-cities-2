import {ActionCreator as AppActionCreator} from '../application/application';

const initialState = {
  cities: [],
  places: [],
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  GET_OFFER_LIST: `GET_ORDER_LIST`,
  GET_CITY_LIST: `GET_CITY_LIST`,
  SERVER_ERROR: `SERVER_ERROR`
};

export const ActionCreator = {
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
          dispatch(AppActionCreator.chooseCity(cities[0]));

          const defCityPlaces = response.data.filter((place) => place.city.name === cities[0].name).map(offerBuilder);

          dispatch(ActionCreator.fetchOfferList(defCityPlaces));
        }
      });
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER_LIST:
      return Object.assign({}, state, {places: action.payload});
    case ActionType.GET_CITY_LIST:
      return Object.assign({}, state, {cities: action.payload});
    default:
      return state;
  }
};
