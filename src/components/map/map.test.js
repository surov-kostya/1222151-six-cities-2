import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map';
import {places} from '../../mocks/offers';

it(`Map renders correct`, () => {
  const tree = renderer.create(<Map places={places}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
