import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list';
import {cities} from '../../mocks/offers';

it(`City list renders correctly`, () => {
  const tree = renderer.create(<CityList
    cities={cities.map((city) => ({id: city.id, coords: city.coords, name: city.name}))}
    currentCityId={0}
    onChooseCity={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
