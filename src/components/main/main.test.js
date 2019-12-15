import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';
import {cities} from '../../mocks/offers';
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
  data: {favorites: PLACES},
  application: {
    userParams: {
      id: 1,
      name: `q`,
      email: `q@q.ru`,
      avatarSrc: `/static/avatar/2.jpg`,
      status: ``
    }
  }
});

it(`Main renders correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>

          <Main
            places={cities[0].places}
            cities={cities.map((city) => ({id: city.id, coords: city.coords, name: city.name}))}
            currentCity={{id: 0, coords: [1, 2], name: `City`}}
            onTitleClick={() => {}}
            onChooseCity={() => {}}
            userParams={{
              id: 1,
              name: `Vasya`,
              email: `as@as.ru`,
              avatarSrc: `tratata`,
              isPro: false
            }}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
