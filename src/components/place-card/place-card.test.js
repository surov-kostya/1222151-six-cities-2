import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card';
import {cities} from '../../mocks/offers';

it(`PlaceCard renders correctly`, () => {
  const tree = renderer.create(<PlaceCard place={cities[0].places[0]} onTitleClick={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
