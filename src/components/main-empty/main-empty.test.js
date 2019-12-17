import React from 'react';
import MainEmpty from './main-empty';
import renderer from 'react-test-renderer';

const MOCK_CITY = {id: 0, coords: [1, 2], name: `City`};

it(`MainEmpty renders correctly`, () => {
  const tree = renderer.create(<MainEmpty
    currentCity={MOCK_CITY}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
