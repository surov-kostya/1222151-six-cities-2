import {ActionCreator, ActionType, reducer, getInitState, Operation} from './application';
import {cities} from '../../mocks/offers';
import createAPI from '../../api';
import MockAdapter from 'axios-mock-adapter';


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

describe(`Sign on function`, () => {
  const EMAIL = `qw@qw.ru`;
  const PASSWORD = 1234;
  const MOCK_RESPONSE = {
    id: 1,
    name: `Vasya`,
    email: `qw@qw.ru`,
    avatarSrc: undefined,
    isPro: undefined
  };

  it(`post to /login runs toggle auth and set user params`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const postToLogin = Operation.signIn(EMAIL, PASSWORD);

    mockApi
      .onPost(`/login`, {email: EMAIL, password: PASSWORD})
      .reply(200, MOCK_RESPONSE);

    return postToLogin(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.TOGGLE_AUTH_REQ
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_PARAMS,
          payload: MOCK_RESPONSE
        });
      });
  });

});
