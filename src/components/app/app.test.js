import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {cities} from '../../mocks/offers';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App places={cities[0].places}
      cities={cities.map((city) => ({id: city.id, name: city.name, coords: city.coords}))}
      city={{id: 0, name: `Paris`, coords: [1, 2]}}
      chooseCity={() => {}}
      fetchOfferList={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
