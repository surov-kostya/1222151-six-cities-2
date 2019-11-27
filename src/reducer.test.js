import {ActionCreator, ActionType, reducer, Operation, getInitState} from './reducer';
import createAPI from './api';
import {cities} from './mocks/offers';
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

  const PLACES = cities[0].places;

  it(`Action creator for changing city`, () => {
    expect(ActionCreator.chooseCity(CITY)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: CITY
    });
  });

  it(`Action creator for download places`, () => {
    expect(ActionCreator.fetchOfferList(PLACES)).toEqual({
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

  it(`Reducer should fetch places`, () => {
    expect(reducer(initState, {
      type: ActionType.GET_OFFER_LIST,
      payload: cities[CITY.id].places,
    })).toEqual(Object.assign({}, initState, {places: cities[CITY.id].places}));
  });
});

describe(`fetchOffers function`, () => {
  const mockPlace = {
    "city": {
      "name": `Hamburg`,
      "location": {
        "latitude": 53.550341,
        "longitude": 10.000654,
        "zoom": 13
      }
    },
    "preview_image": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
    "images": [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`
    ],
    "title": `Loft Studio in the Central Area`,
    "is_favorite": false,
    "is_premium": true,
    "rating": 2.4,
    "type": `house`,
    "bedrooms": 4,
    "max_adults": 10,
    "price": 931,
    "goods": [
      `Laptop friendly workspace`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`
    },
    "description": `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
    "location": {
      "latitude": 53.573341000000006,
      "longitude": 10.025654000000001,
      "zoom": 16
    },
    "id": 101
  };

  const resultMockPlace = {
    "id": 101,
    "name": `Loft Studio in the Central Area`,
    "imageSrc": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
    "gallerySrcs": [
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/8.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/3.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/20.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/5.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/11.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/7.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
      `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`
    ],
    "mark": `Premium`,
    "rating": 2.4,
    "parametrs": {
      "place": `Entire`,
      "bedrooms": 4,
      "adults": 10
    },
    "price": 931,
    "features": [
      `Laptop friendly workspace`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "status": `Pro`,
      "avatarSrc": `img/avatar-angelina.jpg`
    },
    "coords": [
      53.573341000000006,
      10.025654000000001
    ]
  };

  it(`makes correct request to /hotels`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const offersLoader = Operation.fetchOfferList(`Hamburg`);

    mockApi
      .onGet(`/hotels`)
      .reply(200, [mockPlace]);

    return offersLoader(dispatch, undefined, api)
      .then(() => {
        // expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.GET_OFFER_LIST,
          payload: [resultMockPlace]
        });
      });
  });
});
