import {variations} from '../../mocks/sort-variations';

const initialState = {
  city: {id: -1, name: `temp`, coords: []},
  mainSortVariant: variations[0]
};

export const getInitState = () => {
  return initialState;
};

export const ActionType = {
  SORT_MAIN: `SORT_MAIN`,
  CHANGE_CITY: `CHANGE_CITY`,
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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_MAIN:
      return Object.assign({}, state, {mainSortVariant: action.payload});
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    default:
      return state;
  }
};
