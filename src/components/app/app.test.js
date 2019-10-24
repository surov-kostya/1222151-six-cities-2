import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {places} from '../../mocks/offers';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App places={places}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
