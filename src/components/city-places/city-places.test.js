import React from 'react';
import CityPlaces from './city-places';
import renderer from 'react-test-renderer';
import {cities} from '../../mocks/offers';
import {variations} from '../../mocks/sort-variations';

const PLACES = cities[0].places;
const CITY = cities[0];
const VARIANT = variations[0];
const ACTIVE = 0;

it(`CityPlaces renders correctly`, () => {
  const tree = renderer.create(<CityPlaces
    places={PLACES}
    currentCity={CITY}
    activeSortVariant={VARIANT}
    sortVariations={variations}
    activeItem={ACTIVE}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
