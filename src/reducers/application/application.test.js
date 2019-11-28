import {ActionCreator, ActionType, reducer, getInitState} from './application';
import {cities} from '../../mocks/offers';

describe(`Business logic is correct`, () => {
  it(`Render places of a city on navigate`, () => {
    const CHOSEN_CITY_ID = 0;
    const mockFunc = (chosenCityId) => {
      return cities.find((city) =>
        city.id === chosenCityId
      ).places;
    };
    expect(JSON.stringify(mockFunc(CHOSEN_CITY_ID)) ===
      JSON.stringify(cities[CHOSEN_CITY_ID].places)
    ).toBe(true);
  });
});

describe(`Action creators work correctly`, () => {
  const CITY = {
    id: 0,
    name: `Paris`,
    coords: [48.856663, 2.351556]
  };

  it(`Action creator for changing city`, () => {
    expect(ActionCreator.chooseCity(CITY)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: CITY
    });
  });
});

describe(`Reducer works correctly`, () => {
  const CITY = {
    id: 1,
    name: `Cologne`,
    coords: [50.930779, 6.938399]
  };

  const initState = getInitState();

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it(`Reducer should change city`, () => {
    expect(reducer(initState, {
      type: ActionType.CHANGE_CITY,
      payload: CITY,
    })).toEqual(Object.assign({}, initState, {city: CITY}));
  });
});
