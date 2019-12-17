import React from 'react';
import renderer from 'react-test-renderer';
import {PlaceDetails} from './place-details';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

const PLACES = [{
  "id": 101,
  "city": `Hamburg`,
  "name": `Loft Studio in the Central Area`,
  "imageSrc": `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/6.jpg`,
  "gallerySrcs": [
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/19.jpg`,
    `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`
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
}];

const CITY = {
  id: 1,
  name: `Hamburg`,
  coords: [55.55, 55.55]
};

const mockStore = configureStore([]);
const store = mockStore({
  data: {
    places: PLACES,
    favorites: PLACES,
    hotelComments: [{id: 1, rating: 4, text: `atata`}]
  },
  application: {
    city: CITY,
    userParams: {
      id: 1,
      name: `q`,
      email: `q@q.ru`,
      avatarSrc: `/static/avatar/2.jpg`,
      status: ``
    }
  }
});

it(`PlaceDetails renders correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PlaceDetails
            match={{params: {id: 101}}}
            fetchHotelComments={() => {}}
            data={{
              places: PLACES,
              favorites: PLACES,
              hotelComments: [{id: 1, rating: 4, text: `atata`, author: {avatarSrc: `ddd`, name: `ddd`}}]
            }}
            application={{
              city: CITY,
              userParams: {
                id: 1,
                name: `q`,
                email: `q@q.ru`,
                avatarSrc: `/static/avatar/2.jpg`,
                status: ``
              }
            }}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
