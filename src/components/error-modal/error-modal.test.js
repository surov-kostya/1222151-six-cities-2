import React from 'react';
import renderer from 'react-test-renderer';
import ErrorModal from './error-modal';

it(`City list renders correctly`, () => {
  const tree = renderer.create(<ErrorModal errorMessage={`error`}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
