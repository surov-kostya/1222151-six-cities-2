import React from 'react';
import MainEmpty from './main-empty';
import renderer from 'react-test-renderer';

it(`MainEmpty renders correctly`, () => {
  const tree = renderer.create(<MainEmpty
    currentCity={{id: 0, coords: [1, 2], name: `City`}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
