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

  it(`Reducer should block review form`, () => {
    expect(reducer(initState, {
      type: ActionType.TOGGLE_FORM_BLOCK,
      payload: true,
    })).toEqual(Object.assign({}, initState, {isFormBlocked: true}));
  });
});

describe(`Sign on function`, () => {
  const GOOD_STATUS = 200;
  const EMAIL = `qw@qw.ru`;
  const PASSWORD = 1234;
  const MOCK_RESPONSE = {
    id: 1,
    name: `Vasya`,
    email: `qw@qw.ru`,
    avatarSrc: undefined,
    status: ``
  };

  it(`post to /login sets user params`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const postToLogin = Operation.signIn(EMAIL, PASSWORD);

    mockApi
      .onPost(`/login`, {email: EMAIL, password: PASSWORD})
      .reply(GOOD_STATUS, MOCK_RESPONSE);

    return postToLogin(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_PARAMS,
          payload: MOCK_RESPONSE
        });
      });
  });

  it(`get to /login runs sets user params`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const getToLogin = Operation.checkAuth();

    mockApi
      .onGet(`/login`)
      .reply(GOOD_STATUS, MOCK_RESPONSE);

    return getToLogin(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.SET_USER_PARAMS,
          payload: MOCK_RESPONSE
        });
      });
  });

});
