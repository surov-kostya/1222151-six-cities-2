import React from 'react';
import renderer from 'react-test-renderer';
import PlaceDetails from './place-details';
import {places} from '../../mocks/offers';

it(`PlaceDetails renders correctly`, () => {
  const tree = renderer.create(<PlaceDetails place={places[0]} neighbors={places.slice(1)} />).toJSON();
  expect(tree).toMatchSnapshot();
});
