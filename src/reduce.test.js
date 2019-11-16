import {ActionCreator, ActionType, reducer} from "./reducer";
import {cities} from './mocks/offers';


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

  const PLACES = cities[0].places;

  it(`Action creator for changing city`, () => {
    expect(ActionCreator.chooseCity(CITY)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: CITY
    });
  });

  it(`Action creator for download places`, () => {
    expect(ActionCreator.fetchOfferList(CITY.id)).toEqual({
      type: ActionType.GET_OFFER_LIST,
      payload: PLACES
    });
  });
});

describe(`Reducer works correctly`, () => {
  const CITY = {
    id: 1,
    name: `Cologne`,
    coords: [50.930779, 6.938399]
  };

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
      places: cities[0].places
    });
  });

  it(`Reducer should change city`, () => {
    expect(reducer({
      city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
      places: cities[0].places
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITY,
    })).toEqual({
      city: CITY,
      places: cities[0].places
    });
  });

  it(`Reducer should fetch places`, () => {
    expect(reducer({
      city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
      places: cities[0].places
    }, {
      type: ActionType.GET_OFFER_LIST,
      payload: cities[CITY.id].places,
    })).toEqual({
      city: {id: 0, name: `Paris`, coords: [48.856663, 2.351556]},
      places: cities[CITY.id].places
    });
  });
});
