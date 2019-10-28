import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {places} from '../../mocks/offers';

it(`PlaceCard renders correctly`, () => {
  const tree = renderer.create(<PlaceCard place={places[0]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
