import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {cities} from '../../mocks/offers';
import {variations} from '../../mocks/sort-variations';
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

const mockStore = configureStore([]);
const store = mockStore({
  data: {
    places: PLACES,
    favorites: PLACES,
    cities
  },
  application: {
    city: {id: 0, name: `Paris`, coords: [1, 2]},
    userParams: {
      id: 1,
      name: `q`,
      email: `q@q.ru`,
      avatarSrc: `/static/avatar/2.jpg`,
      status: ``
    },
    mainSortVariant: {
      id: 0,
      name: `Popular`
    }
  }
});
it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App
              chooseCity={() => {}}
              fetchOfferList={() => {}}
              sortVariations={variations}

            />
          </BrowserRouter >
        </Provider >
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
