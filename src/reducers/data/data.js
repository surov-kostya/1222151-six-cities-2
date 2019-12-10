import {ActionCreator as AppActionCreator} from '../application/application';

const initialState = {
  cities: [],
  places: [],
  hotelComments: []
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  GET_OFFER_LIST: `GET_ORDER_LIST`,
  GET_CITY_LIST: `GET_CITY_LIST`,
  SERVER_ERROR: `SERVER_ERROR`,
  GET_HOTEL_COMMENTS: `GET_HOTEL_COMMENTS`,
  POST_COMMENT: `POST_COMMENT`
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
  },

  fetchHotelComments: (comments) => {
    return {
      type: ActionType.GET_HOTEL_COMMENTS,
      payload: comments
    };
  },

  postComment: (comments) => {
    return {
      type: ActionType.POST_COMMENT,
      payload: comments
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

export const reviewsBuilder = (reviewArr) => (
  reviewArr.map((review) => ({
    id: review.id,
    author: {
      id: review.user.id,
      name: review.user.name,
      status: review.user.is_pro ? `Pro` : ``,
      avatarSrc: review.user.avatar_url
    },
    rating: review.rating,
    text: review.comment,
    creationDate: review.date
  }))
);

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
  },

  fetchHotelComments: (hotelId) => (dispatch, _, api) => {
    return api.get(`/comments/${hotelId}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.fetchHotelComments(reviewsBuilder(response.data)));
        }
      });
  },

  postComment: (hotelId, comment) => (dispatch, _, api) => {
    return api.post(`comments/${hotelId}`, {rating: comment.rating, comment: comment.text}).
      then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.postComment(reviewsBuilder(response.data)));
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
    case ActionType.GET_HOTEL_COMMENTS:
      return Object.assign({}, state, {hotelComments: action.payload});
    case ActionType.POST_COMMENT:
      return Object.assign({}, state, {hotelComments: action.payload});
    default:
      return state;
  }
};
