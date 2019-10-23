import React from 'react';
import Main from './main';
import renderer from 'react-test-renderer';

it(`Main renders correctly`, () => {
  const tree = renderer.create(<Main places={[
    {
      id: 0,
      name: `Beautiful && luxurious apartment at great location`
    },
    {
      id: 1,
      name: `Wood and stone place`
    },
    {
      id: 2,
      name: `Nice, cozy, warm big bed apartment`
    },
    {
      id: 3,
      name: `Canal View Prinsengracht`
    },
  ]}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
