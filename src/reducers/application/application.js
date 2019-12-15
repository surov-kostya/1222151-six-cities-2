import {variations} from '../../mocks/sort-variations';
import {ActionCreator as ActionCreatorData} from '../data/data';

const initialState = {
  city: undefined,
  mainSortVariant: variations[0],
  isAuthorizationRequired: true,
  userParams: undefined
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  SORT_MAIN: `SORT_MAIN`,
  CHANGE_CITY: `CHANGE_CITY`,
  TOGGLE_AUTH_REQ: `TOGGLE_AUTH_REQ`,
  SET_USER_PARAMS: `SET_USER_PARAMS`
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

  toggleAuthReq: () => ({
    type: ActionType.TOGGLE_AUTH_REQ,
  }),

  setUserParams: (params) => {
    return {
      type: ActionType.SET_USER_PARAMS,
      payload: params
    }
    ;
  }
};

export const Operation = {
  signIn: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {email, password})
        .then((response) => {
          if (response.status === 200) {
            // const queryParams = new URLSearchParams(window.location.search);
            // window.location.replace(queryParams.get(`prevUrl`));
            dispatch(ActionCreatorData.serverError(0));
            dispatch(ActionCreator.toggleAuthReq());
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
  }
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_MAIN:
      return Object.assign({}, state, {mainSortVariant: action.payload});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.TOGGLE_AUTH_REQ:
      return Object.assign({}, state, {isAuthorizationRequired: !state.isAuthorizationRequired});
    case ActionType.SET_USER_PARAMS:
      return Object.assign({}, state, {userParams: action.payload});
    default:
      return state;
  }
};
