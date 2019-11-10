import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list';
import {places} from '../../mocks/offers';

it(`PlaceList renders correctly`, () => {
  const tree = renderer.create(<PlaceList places={places} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
