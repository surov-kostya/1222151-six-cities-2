import {ActionCreator, ActionType, reducer, Operation, getInitState, reviewsBuilder} from './data';
import createAPI from '../../api';
import {cities} from '../../mocks/offers';
import MockAdapter from 'axios-mock-adapter';

describe(`Action creators work correctly`, () => {
  const PLACES = cities[0].places;
  const CITIES = cities;
  const COMMENTS = cities[0].places[0].reviews;

  it(`Action creator for download places`, () => {
    expect(ActionCreator.fetchOfferList(PLACES)).toEqual({
      type: ActionType.GET_OFFER_LIST,
      payload: PLACES
    });
  });

  it(`Action creator for download cities`, () => {
    expect(ActionCreator.fetchCityList(CITIES)).toEqual({
      type: ActionType.GET_CITY_LIST,
      payload: CITIES
    });
  });

  it(`Action creator for download comments`, () => {
    expect(ActionCreator.fetchHotelComments(COMMENTS)).toEqual({
      type: ActionType.GET_HOTEL_COMMENTS,
      payload: COMMENTS
    });
  });

  it(`Action creator for post comment`, () => {
    expect(ActionCreator.postComment(COMMENTS)).toEqual({
      type: ActionType.POST_COMMENT,
      payload: COMMENTS
    });
  });


});

describe(`Reducer works correctly`, () => {
  const CITY = {
    id: 1,
    name: `Cologne`,
    coords: [50.930779, 6.938399]
  };
  const PLACES = cities[0].places;
  const CITIES = cities;
  const COMMENTS = cities[0].places[0].reviews;


  const initState = getInitState();

  it(`Reducer should fetch places`, () => {
    expect(reducer(initState, {
      type: ActionType.GET_OFFER_LIST,
      payload: PLACES,
    })).toEqual(Object.assign({}, initState, {places: PLACES}));
  });

  it(`Reducer should fetch cities`, () => {
    expect(reducer(initState, {
      type: ActionType.GET_CITY_LIST,
      payload: CITIES,
    })).toEqual(Object.assign({}, initState, {cities: CITIES}));
  });
  it(`Reducer should fetch comments`, () => {
    expect(reducer(initState, {
      type: ActionType.GET_HOTEL_COMMENTS,
      payload: COMMENTS,
    })).toEqual(Object.assign({}, initState, {hotelComments: COMMENTS}));
  });
  it(`Reducer should update comments on post comment`, () => {
    expect(reducer(initState, {
      type: ActionType.POST_COMMENT,
      payload: COMMENTS,
    })).toEqual(Object.assign({}, initState, {hotelComments: COMMENTS}));
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

  const mockComments = [
    {
      "id": 1,
      "user": {
        "id": 17,
        "is_pro": false,
        "name": `Emely`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`
      },
      "rating": 3,
      "comment": `The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.`,
      "date": `2019-11-18T14:11:47.470Z`
    },
    {
      "id": 2,
      "user": {
        "id": 17,
        "is_pro": false,
        "name": `Emely`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`
      },
      "rating": 3,
      "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
      "date": `2019-11-18T14:11:47.470Z`
    },
    {
      "id": 3,
      "user": {
        "id": 1,
        "is_pro": false,
        "name": `q`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/6.jpg`
      },
      "rating": 3,
      "comment": `jjjjj`,
      "date": `2019-12-09T21:05:08.934Z`
    },
    {
      "id": 4,
      "user": {
        "id": 1,
        "is_pro": false,
        "name": `q`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/6.jpg`
      },
      "rating": 3,
      "comment": `qqq`,
      "date": `2019-12-09T21:11:45.532Z`
    },
    {
      "id": 5,
      "user": {
        "id": 1,
        "is_pro": false,
        "name": `q`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/6.jpg`
      },
      "rating": 2,
      "comment": `qqq`,
      "date": `2019-12-09T21:12:27.726Z`
    },
    {
      "id": 6,
      "user": {
        "id": 1,
        "is_pro": false,
        "name": `q`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/6.jpg`
      },
      "rating": 5,
      "comment": `nnn`,
      "date": `2019-12-09T21:19:22.314Z`
    },
    {
      "id": 7,
      "user": {
        "id": 1,
        "is_pro": false,
        "name": `q`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/6.jpg`
      },
      "rating": 3,
      "comment": `sss`,
      "date": `2019-12-10T19:05:37.582Z`
    }
  ];

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
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.GET_OFFER_LIST,
          payload: [resultMockPlace]
        });
      });
  });

  it(`makes correct request to /comments/:hotelId`, () => {
    const HOTEL_ID = 1;
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const commentsLoader = Operation.fetchHotelComments(HOTEL_ID);

    mockApi
      .onGet(`/comments/${HOTEL_ID}`)
      .reply(200, mockComments);

    return commentsLoader(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.GET_HOTEL_COMMENTS,
          payload: reviewsBuilder(mockComments)
        });
      });
  });

  it(`makes correct post to /comments/:hotelId`, () => {
    const HOTEL_ID = 1;
    const COMMENT = {rating: 3, comment: `test`};
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const mockApi = new MockAdapter(api);

    const commentsLoader = Operation.postComment(HOTEL_ID, COMMENT);

    mockApi
      .onPost(`/comments/${HOTEL_ID}`)
      .reply(200, mockComments);

    return commentsLoader(dispatch, undefined, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.POST_COMMENT,
          payload: reviewsBuilder(mockComments)
        });
      });
  });
});
