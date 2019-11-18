import React from 'react';
import renderer from 'react-test-renderer';
import PlaceDetails from './place-details';
import {cities} from '../../mocks/offers';

it(`PlaceDetails renders correctly`, () => {
  const tree = renderer.create(<PlaceDetails
    currentCity={cities[0]}
    place={cities[0].places[0]}
    neighbors={cities[0].places.slice(1)}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
