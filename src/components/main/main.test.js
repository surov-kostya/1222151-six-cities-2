import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';
import {places} from '../../mocks/offers';

it(`Main renders correctly`, () => {
  const tree = renderer.create(<Main places={places}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
