import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';
import {cities} from '../../mocks/offers';

it(`Main renders correctly`, () => {
  const tree = renderer.create(<Main
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
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
