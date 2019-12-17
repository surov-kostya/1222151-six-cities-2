import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list';
import {cities} from '../../mocks/offers';

const MOCK_CITY_ID = 0;

it(`City list renders correctly`, () => {
  const tree = renderer.create(<CityList
    cities={cities.map((city) => ({id: city.id, coords: city.coords, name: city.name}))}
    currentCityId={MOCK_CITY_ID}
    onChooseCity={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
