import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {cities} from '../../mocks/offers';

it(`Map renders correct`, () => {
  const tree = renderer.create(<Map places={cities[0].places} city={{id: 0, name: `Paris`, coords: [1, 2]}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
