import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {cities} from '../../mocks/offers';

const MOCK_CITY_INDEX = 0;
const MOCK_CITY = {id: 0, name: `Paris`, coords: [1, 2]};

it(`Map renders correct`, () => {
  const tree = renderer.create(<Map places={cities[MOCK_CITY_INDEX].places} city={MOCK_CITY}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
