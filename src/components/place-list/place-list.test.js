import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list';
import {cities} from '../../mocks/offers';

it(`PlaceList renders correctly`, () => {
  const tree = renderer.create(<PlaceList places={cities[0].places} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
