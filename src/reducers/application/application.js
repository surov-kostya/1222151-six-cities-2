import {variations} from '../../mocks/sort-variations';
import {Operation as OperationData} from '../data/data';

const initialState = {
  city: undefined,
  mainSortVariant: variations[0],
  userParams: undefined,
  isFormBlocked: false
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  SORT_MAIN: `SORT_MAIN`,
  CHANGE_CITY: `CHANGE_CITY`,
  SET_USER_PARAMS: `SET_USER_PARAMS`,
  TOGGLE_FORM_BLOCK: `TOGGLE_FORM_BLOCK`
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


  setUserParams: (params) => {
    return {
      type: ActionType.SET_USER_PARAMS,
      payload: params
    }
    ;
  },

  toggleFormBlock: (status) => {
    return {
      type: ActionType.TOGGLE_FORM_BLOCK,
      payload: status
    };
  }
};

export const Operation = {
  signIn: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {email, password})
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;
            dispatch(ActionCreator.setUserParams({
              id: data.id,
              name: data.name,
              email: data.email,
              avatarSrc: data.avatar_url,
              status: data.is_pro ? `Pro` : ``
            }));
          }
        });
  },

  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`).
      then(({data, status}) => {
        if (status === 200) {
          dispatch(ActionCreator.setUserParams({
            id: data.id,
            name: data.name,
            email: data.email,
            avatarSrc: data.avatar_url,
            status: data.is_pro ? `Pro` : ``
          }));
          OperationData.fetchFavorites();
        }
      });
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FORM_BLOCK:
      return Object.assign({}, state, {isFormBlocked: action.payload});
    case ActionType.SORT_MAIN:
      return Object.assign({}, state, {mainSortVariant: action.payload});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.SET_USER_PARAMS:
      return Object.assign({}, state, {userParams: action.payload});
    default:
      return state;
  }
};
