import React from 'react';
import renderer from 'react-test-renderer';
import ReviewForm from './review-form';

it(`ReviewForm renders correctly`, () => {
  const tree = renderer.create(<ReviewForm/>).toJSON();
  expect(tree).toMatchSnapshot();
});
